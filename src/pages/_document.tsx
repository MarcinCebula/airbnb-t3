import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* <meta
          name="description"
          content="Welcome to my corner of the web! I'm Marcin, a full stack developer and indie hacker, deeply immersed in the world of code. I write and stream about TypeScript, Next.js, React.js, OpenAI, ChatGPT, T3 Stack, and Vercel. Explore my personal projects, in-depth blogs, and join my live Coding Hour where we delve into the intricacies of Next.js, React and the Typescript ecosystem"
        />

        <meta
          name="keywords"
          content="Marcin Cebula, Full Stack Developer, Indie Hacker, Node.js, React, Next.js, tRPC, T3, Vercel, PostgreSQL, ChatGPT, OpenAI, TypeScript, Live Coding, Programming Blog, Tech Projects"
        /> */}

        <meta name="robots" content="all" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#f8fafc" />
        <meta name="color-scheme" content="light only" />

        <link rel="icon" sizes="192x192" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" color="#FFFFFF" />

        {/* - Open Graph tags for social media  */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-white text-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
