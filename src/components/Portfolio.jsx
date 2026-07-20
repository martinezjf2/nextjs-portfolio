import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = [
  "All",
  "Landing",
  "Email",
  "Newsletter",
  "Fullstack",
  "Shopify",
];

const portfolioItems = [
  {
    img: "/img/portfolio/guitarstore.png",
    title: "GuitarStore",
    meta: "Fullstack",
    portfolioLink: "https://jeffrey-guitarstore.netlify.app/",
    categorySlug: "fullstack-developer",
  },
  {
    img: "/img/portfolio/newSeguidores2.png",
    title: "Spanish Ministry (In Progress)",
    meta: "Fullstack",
    portfolioLink: "https://stkilianspanishministry.com",
    categorySlug: "fullstack-developer",
  },
  {
    img: "/img/portfolio/carrysmart.png",
    title: "CarrySmart",
    meta: "Shopify",
    portfolioLink: "https://jeffrey-carrysmart.myshopify.com/",
    password: "1234",
    categorySlug: "content-editor",
  },
  // {
  //   img: "/img/portfolio/guild.png",
  //   title: "Guild Education",
  //   meta: "Fullstack",
  //   portfolioLink: "https://guild-education-replica.herokuapp.com",
  // },
  {
    img: "/img/portfolio/realestate.png",
    title: "Portos",
    meta: "Landing",
    portfolioLink: "https://jeffrey-portos-landing-page.netlify.app/",
    categorySlug: "frontend-developer",
  },
  {
    img: "/img/portfolio/dvc.png",
    title: "DVC Newsletter Email",
    meta: "Newsletter",
    portfolioLink: "https://jeffrey-dvc-newletter-email.netlify.app",
    categorySlug: "email-developer",
  },
  {
    img: "/img/portfolio/soccer.png",
    title: "Soccer.com",
    meta: "Email",
    portfolioLink: "https://jeffrey-soccer-promotional-email.netlify.app",
    categorySlug: "email-developer",
  },
  {
    img: "/img/portfolio/mixtiles.png",
    title: "Mixtiles Email",
    meta: "Email",
    portfolioLink: "https://jeffrey-mixtiles-promotional-email.netlify.app",
    categorySlug: "email-developer",
  },
  {
    img: "/img/portfolio/sketch.png",
    title: "Sketch Release",
    meta: "Email",
    portfolioLink: "https://jeffrey-sketch-release-email.netlify.app",
    categorySlug: "email-developer",
  },
  {
    img: "/img/portfolio/joncarlos.png",
    title: "Concert Ticket",
    meta: "Email",
    portfolioLink: "https://jon-carlos-ticket.netlify.app/",
    categorySlug: "email-developer",
  },
  // {
  //   img: "/img/portfolio/seguidores.png",
  //   title: "Spanish Ministry",
  //   meta: "Fullstack",
  //   portfolioLink: "https://www.seguidoresdejesus.com",
  //   details: "Ruby on Rails",
  // },
];

const Portfolio = ({ items, showFilters = true }) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredItems =
    selectedTab === "All"
      ? items
      : items.filter((item) => item.meta === selectedTab);

  return (
    <div className="shane_tm_section" id="portfolio">
      <div className="shane_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="shane_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Creative Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs onSelect={(index) => setSelectedTab(tabList[index])}>
                {showFilters && (
                  <TabList>
                    {tabList.map((val, i) => (
                      <Tab key={i}>{val}</Tab>
                    ))}
                  </TabList>
                )}
                {/* End tablist */}

                <div className="portfolio_list has-effect">
                  <Gallery>
                    <ul className="gallery_zoom">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((val, i) => (
                          <li
                            key={i}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay={val.delayAnimation}
                          >
                            <div
                              className="inner"
                              style={{
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <Item
                                  original={val.img}
                                  thumbnail={val.img}
                                  width={1000}
                                  height={1000}
                                >
                                  {({ ref }) => (
                                    <img
                                      src={val.img}
                                      alt="portfolio"
                                      role="button"
                                      ref={ref}
                                    />
                                  )}
                                </Item>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href={val.portfolioLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {val.title}
                                  </a>
                                </h3>
                                <h5>{val.meta}</h5>

                                {val.password && (
                                  <p
                                    style={{
                                      fontStyle: "",
                                      color: "#555",
                                      marginTop: "5px",
                                    }}
                                  >
                                    Password: {val.password}
                                  </p>
                                )}
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <p>Coming Soon...</p>
                      )}
                    </ul>
                  </Gallery>
                  {/* End filtered portfolio items */}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
