import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/scss/styles.scss";

export default function App({ Component, pageProps }) {

useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return <Component {...pageProps} />;
}
