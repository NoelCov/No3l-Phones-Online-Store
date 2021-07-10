import styled, { css } from "styled-components";

import { PersonalizedContainer } from "../personalized-container/personalized-container.component";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Container = styled(PersonalizedContainer)`
  border-radius: 7px;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
  color: white;
  padding: 50px 100px;
  border-radius: 30%;

  @media screen and (max-width: 480px) {
    padding: 20px 25px;
    gap: 30px;
  }
`;

export const AboutUsText = styled.div`
  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const AboutUsTitle = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const AboutUsIconsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-content: space-around;

  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const AboutUsIcon = css`
  font-size: 30px;
  color: white;

  &:hover {
    color: rgb(255, 166, 0);
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const GitHubIconContainer = styled(GitHubIcon)`
  ${AboutUsIcon}
`;

export const LinkedInIconContainer = styled(LinkedInIcon)`
  ${AboutUsIcon}
`;

export const TwitterIconContainer = styled(TwitterIcon)`
  ${AboutUsIcon}
`;
