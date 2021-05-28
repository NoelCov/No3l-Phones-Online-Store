import "./about-us.styles.scss";

import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";

export const AboutUs = () => {
  return (
    <PersonalizedContainer>
      <div className="about-us-container">
        <div className="about-us-lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at
          augue eget arcu dictum varius duis at consectetur. Nunc sed velit
          dignissim sodales. Id leo in vitae turpis massa. Cum sociis natoque
          penatibus et. Egestas maecenas pharetra convallis posuere morbi.
          Porttitor lacus luctus accumsan tortor posuere. Et tortor consequat id
          porta nibh venenatis cras sed felis. Semper auctor neque vitae tempus
          quam pellentesque nec nam aliquam. Tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Fermentum dui faucibus in ornare quam. Enim nulla
          aliquet porttitor lacus luctus. Augue eget arcu dictum varius.
          Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Sed
          cras ornare arcu dui vivamus arcu felis. Sem integer vitae justo eget
          magna fermentum iaculis. Aliquam faucibus purus in massa tempor nec
          feugiat. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
          Massa placerat duis ultricies lacus sed turpis tincidunt. Ultricies mi
          quis hendrerit dolor magna eget est.
        </div>
        <div className="about-us-title">
          Follow "No3l Codes" on Social Media
        </div>
        <div className="about-us-icons-container">
          <a href="https://github.com/NoelCov" target="blank">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/noelcodes/" target="blank">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://twitter.com/No3l_Codes" target="blank">
            <TwitterIcon className="icon" />
          </a>
        </div>
      </div>
    </PersonalizedContainer>
  );
};
