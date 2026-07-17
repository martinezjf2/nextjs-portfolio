import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon Section */}

        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Meta Tags */}
        <meta charset="utf-8" />
        <meta name="apple-mobile-web-app-title" content="Jeffrey Martinez" />
        <meta name="mobile-web-app-capable" content="Jeffrey Martinez"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="React Personal Portfolio" />

        <meta property="og:title" content="Jeffrey's Portfolio" />
        <meta
          property="og:description"
          content="A showcase of projects by Jeffrey, Software Developer."
        />
        <meta property="og:image" content="/img/slider/jeff.png" />
        <meta property="og:url" content="https://www.jeffreymartinez.dev" />
        <meta property="og:type" content="website" />


      </Head>
      <body className="loaded">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
