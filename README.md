# Portfolio Website

A modern, responsive portfolio website inspired by [chanhdai.com](https://chanhdai.com/), built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- ✨ Clean & modern design
- 🌓 Light/Dark theme support
- 📱 Fully responsive
- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS v4
- 🔧 TypeScript for type safety
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Update Your Personal Information

Edit `features/profile/data/user.ts` to add your details:

- Name, bio, contact information
- Profile images
- Current role and company

### 2. Add Your Profile Picture

Replace `public/images/avatar.svg` with your own image (recommended: 400x400px)

### 3. Update Social Links

Edit `features/profile/data/social-links.ts` to add your social media profiles

### 4. Add Your Tech Stack

Edit `features/profile/data/tech-stack.ts` to list the technologies you work with

### 5. Add Your Projects

Edit `features/profile/data/projects.ts` to showcase your work

### 6. Add Your Experience

Edit `features/profile/data/experiences.ts` to list your work history

### 7. Update Site Configuration

Edit `config/site.ts` to set your site metadata and SEO information

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
├── components/             # Reusable UI components
├── features/profile/       # Profile-specific components and data
├── config/                 # Site configuration
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended), Netlify, or any platform that supports Next.js.

## Acknowledgments

- Design inspired by [chanhdai.com](https://chanhdai.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
