import Head from "next/head";
import Header from "@/src/components/Header";
import Slider from "@/src/components/Slider";
import About from "@/src/components/About";
import Brand from "@/src/components/Brand";
import Portfolio from "@/src/components/Portfolio";
import CallToAction from "@/src/components/CallToAction";
import Footer from "@/src/components/Footer";
import { portfolioItems } from "@/src/data/portfolio";
import { categoryNames } from "@/src/data/category";


export default function CategoryPage({ projects, categoryName }) {
  // console.log({ projects, categoryName });
  return (
    <>
      <Head>
        <title>{categoryName} Portfolio | Jeffrey Martinez</title>

        <meta
          name="description"
          content={`View Jeffrey Martinez's ${categoryName} portfolio projects.`}
        />
      </Head>

      <div className="home-two">
        <Header />
        <Slider subtitle={categoryName}/>

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
        <Portfolio items={projects} showFilters={false} />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export function getStaticPaths() {
  const paths = Object.keys(categoryNames).map((category) => ({
    params: {
      category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const categoryName = categoryNames[params.category];

  const projects = portfolioItems.filter(
    (project) => project.categorySlug === params.category,
  );

  //   Add an object first with keys and values of the category name and subtitles.
  //   Make sure to add the object within the Data folder to export here and to the slug

  return {
    props: {
      projects,
      categoryName,
    },
  };
}
