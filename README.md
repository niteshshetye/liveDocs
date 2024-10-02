## Technologies we are using

1. Clerk for authentication
2. Shadcn for reusable component
3. Tailwind css for style
4. Typescript for robust code
5. lexical for text editor
6. liveBlock for real time feature, comment, notification

## Steps to setup this project

1. Initilazied Project => next js, tailwind, eslint, typescript

```bash
npx create-next-app@latest . --typescript --tailwind --eslint
```

2. Initilazied shadcn-ui

```bash
npx shadcn@latest init
```

3. Initilazied editor

```bash
install package => npm i jsm-editor
add editor command => npx jsm-editor add editor
```

- copy editor folder from src/component to our component
- move style folder to root folder
- delete remaning folder for now
- import styles to globals.css

4. Initilazied the clerk

```bash
npm install @clerk/nextjs
```

- install clerk package.
- set public and private env.
- update middleware.ts
- wrap our application with ClerkProvider.
- To modify the styles of clerk default install package

```bash
npm install @clerk/themes
```

5. Initilazied the liveBlock

- create account in liveBlock.
- create new project. (there you find all the step to integrate)
- setup authectication of [liveBlock using Id token](https://liveblocks.io/docs/authentication/id-token/nextjs)

To generate id's we are using nanoid package

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
