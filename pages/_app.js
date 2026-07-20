import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/scss/styles.scss";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Jeffrey Martinez" />
      <meta name="mobile-web-app-capable" content="Jeffrey Martinez"></meta>
    </Head>

    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T94Q6D7ZC3');
        `}
      </Script>

    <div className="shane_tm_all_wrap" id="root">
      <Component {...pageProps} />
    </div>
  </>
}
