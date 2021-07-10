import React from "react";

import {
  Container,
  AboutUsContainer,
  AboutUsText,
  AboutUsTitle,
  AboutUsIconsContainer,
  GitHubIconContainer,
  LinkedInIconContainer,
  TwitterIconContainer,
} from "./about-us.styles";

export const AboutUs = () => {
  return (
    <Container>
      <AboutUsContainer>
        <AboutUsText>
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
        </AboutUsText>
        <AboutUsTitle>Follow Me on Social Media</AboutUsTitle>
        <AboutUsIconsContainer>
          <a href="https://github.com/NoelCov" target="blank">
            <GitHubIconContainer />
          </a>
          <a href="https://www.linkedin.com/in/noelcodes/" target="blank">
            <LinkedInIconContainer />
          </a>
          <a href="https://twitter.com/No3l_Codes" target="blank">
            <TwitterIconContainer />
          </a>
        </AboutUsIconsContainer>
      </AboutUsContainer>
    </Container>
  );
};
