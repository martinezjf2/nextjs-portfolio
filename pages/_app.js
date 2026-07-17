import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/scss/styles.scss";
import Script from "next/script";

export default function App({ Component, pageProps }) {

useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return <div className="shane_tm_all_wrap">
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

    <Component {...pageProps} />
    </div>;
}
