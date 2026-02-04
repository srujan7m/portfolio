"use client";

import { RefObject, useEffect } from "react";

type EventMap = MouseEvent | TouchEvent;

type OutsideClickHandler = (event: EventMap) => void;

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: OutsideClickHandler,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const listener = (event: EventMap) => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, enabled]);
}
