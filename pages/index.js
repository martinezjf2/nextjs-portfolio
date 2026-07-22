import Head from "next/head";
import Header from "@/src/components/Header";
import Slider from "@/src/components/Slider"
import About from "@/src/components/About";
import Brand from "@/src/components/Brand";
import Portfolio from "@/src/components/Portfolio";
import CallToAction from "@/src/components/CallToAction";
import Footer from "@/src/components/Footer";
import { portfolioItems } from "@/src/data/portfolio"



const Home = () => {

  return (
    <>
    <Head>
      <title>Jeffrey Martinez - Learn More About Me!</title>
    </Head>
    
    <div className="home-two">
      <Header />
      <Slider/>

      <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End shane_tm_partners */}

      <About />
      <Portfolio items={portfolioItems}/>
      {/* <Skills /> */}
      {/* <Video /> */}


      {/* Testimonials Section */}
      {/* <div className="shane_tm_section" id="testimonials">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Testimonials</span>
                  <h3>What do people think of me and my personality</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End  shane_tm_testimonials*/}

      {/* <Blog /> */}
      {/* End Blog Section */}

      <CallToAction />
      <Footer />
    </div>
    </>
  );
};

export default Home;
