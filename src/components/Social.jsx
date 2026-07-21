import React from "react";
import { socials } from "../data/socials";

const Social = () => {

  return (
    <>
      <ul className="social social-default position-relative">
        {socials.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
