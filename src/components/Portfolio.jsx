import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import { tabList } from "@/src/data/tabs"

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
