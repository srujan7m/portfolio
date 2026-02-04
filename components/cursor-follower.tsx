'use client';

import { useEffect, useRef, useState } from 'react';

type Position = { x: number; y: number };

const SPRITE_SETS = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

const CURSOR_SPEED = 10;
const IDLE_THRESHOLD = 30;

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const [followerPos, setFollowerPos] = useState<Position>({ x: 32, y: 32 });
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [frameCount, setFrameCount] = useState(0);
  const [idleTime, setIdleTime] = useState(0);
  const [idleAnimation, setIdleAnimation] = useState<string | null>(null);
  const [idleAnimationFrame, setIdleAnimationFrame] = useState(0);
  const lastFrameTimestamp = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const setSprite = (name: string, frame: number) => {
    if (!followerRef.current) return;
    const sprite = SPRITE_SETS[name as keyof typeof SPRITE_SETS][frame % SPRITE_SETS[name as keyof typeof SPRITE_SETS].length];
    followerRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  };

  const handleFrame = () => {
    const diffX = followerPos.x - mousePos.x;
    const diffY = followerPos.y - mousePos.y;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < CURSOR_SPEED || distance < 48) {
      setIdleTime((prev) => prev + 1);
      if (idleTime > IDLE_THRESHOLD && idleAnimation === null) {
        const availableIdleAnimations = ['sleeping', 'scratchSelf'];
        setIdleAnimation(availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)]);
      }

      if (idleAnimation) {
        setIdleAnimationFrame((prev) => prev + 1);
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 8) {
          setIdleAnimationFrame(0);
          setIdleAnimation(null);
        }
        return;
      }

      setSprite('idle', 0);
      return;
    }

    setIdleAnimation(null);
    setIdleTime(0);

    let direction = '';
    direction += diffY / distance > 0.5 ? 'N' : '';
    direction += diffY / distance < -0.5 ? 'S' : '';
    direction += diffX / distance > 0.5 ? 'W' : '';
    direction += diffX / distance < -0.5 ? 'E' : '';
    
    setSprite(direction, frameCount);
    setFrameCount((prev) => (prev + 1) % 2);

    const newX = followerPos.x - (diffX / distance) * CURSOR_SPEED;
    const newY = followerPos.y - (diffY / distance) * CURSOR_SPEED;

    setFollowerPos({
      x: Math.min(Math.max(16, newX), window.innerWidth - 16),
      y: Math.min(Math.max(16, newY), window.innerHeight - 16),
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const animate = (timestamp: number) => {
      if (!lastFrameTimestamp.current) {
        lastFrameTimestamp.current = timestamp;
      }

      if (timestamp - lastFrameTimestamp.current > 100) {
        lastFrameTimestamp.current = timestamp;
        handleFrame();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isReducedMotion) {
      document.addEventListener('mousemove', handleMouseMove);
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followerPos, mousePos, frameCount, idleTime, idleAnimation, idleAnimationFrame]);

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        pointerEvents: 'none',
        imageRendering: 'pixelated',
        left: `${followerPos.x - 16}px`,
        top: `${followerPos.y - 16}px`,
        zIndex: 9999,
        backgroundImage: 'url(https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif)',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
