import Head from "next/head";
import Header from "@/src/components/Header";
import Slider from "@/src/components/slider"
import About from "@/src/components/about";
import Brand from "@/src/components/brand";
import Portfolio from "@/src/components/portfolio";
import CallToAction from "@/src/components/CallToAction";
import Footer from "@/src/components/Footer";
import { portfolioItems } from "@/src/data/portfolio"


const categoryNames = {
  "email-developer": "Email Developer",
  "fullstack-developer": "Full-Stack Developer",
  "shopify-developer": "Shopify Developer",
  "landing-page-developer": "Landing Page Developer",
  "frontend-developer": "FrontEnd Developer"
};


export default function CategoryPage({
  projects,
  categoryName,
}) {

console.log({projects, categoryName})

  return (
    <>
      <Head>
        <title>
          {categoryName} Portfolio | Jeffrey Martinez
        </title>

        <meta
          name="description"
          content={`View Jeffrey Martinez's ${categoryName} portfolio projects.`}
        />
      </Head>

      <div className="home-two">
      <Header />
      <Slider />

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
      <Portfolio items={projects} showFilters={false}/>
      <CallToAction />
      <Footer />
    </div>
    </>
  );
}

export function getStaticPaths() {
  const paths = Object.keys(categoryNames).map(
    (category) => ({
      params: {
        category,
      },
    })
  );

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const categoryName = categoryNames[params.category];

  const projects = portfolioItems.filter(
    (project) =>
      project.categorySlug === params.category
  );

  return {
    props: {
      projects,
      categoryName,
    },
  };
}