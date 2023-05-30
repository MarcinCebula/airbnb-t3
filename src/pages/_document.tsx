import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Building AirBNB frontend and answering questions about NextJS, React,TailwindCSS, Typescript, Javascript tRPC, Typescript"
        />

        <meta
          name="keywords"
          content="Marcin Cebula, AirBNB Clone, T3 Stack, Full Stack Developer, Indie Hacker, Node.js, React, Next.js, tRPC, T3, Vercel, PostgreSQL, ChatGPT, OpenAI, TypeScript, Live Coding, Programming Blog, Tech Projects"
        />

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
        <meta
          property="og:title"
          content="Building AirBNB clone in React & Typescript"
        />
        <meta
          property="og:description"
          content="Building AirBNB frontend and answering questions about NextJS, React,TailwindCSS, Typescript, Javascript tRPC, Typescript"
        />
        <meta
          property="og:image"
          content="https://airbnb.marcincebula.com/card.jpg"
        />
        <meta property="og:url" content="https://airbnb.marcincebula.com" />

        {/* - Twitter tags for social media  */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Building AirBNB clone in React & Typescript"
        />
        <meta
          name="twitter:description"
          content="Building AirBNB frontend and answering questions about NextJS, React,TailwindCSS, Typescript, Javascript tRPC, Typescript"
        />
        <meta
          name="twitter:image"
          content="https://airbnb.marcincebula.com/card.jpg"
        />

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
