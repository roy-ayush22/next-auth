# Next.js Authentication App

A simple authentication app built with Next.js 14, NextAuth.js, and Tailwind CSS. Supports Google, GitHub, and credential-based login.

## Features

- Google & GitHub OAuth
- Username/password authentication
- User profile display
- Responsive design with dark mode

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Create `.env.local`:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

3. **Run the app**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

## OAuth Setup

### GitHub
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`

### Google
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`

## Default Login (for testing)
- Username: `ayush`
- Password: `121212`

## Tech Stack

- Next.js 14 (App Router)
- NextAuth.js
- Tailwind CSS
- TypeScript

## Deploy

Deploy easily on [Vercel](https://vercel.com) - just connect your GitHub repo and add environment variables.

Remember to update `NEXTAUTH_URL` and OAuth callback URLs for production!