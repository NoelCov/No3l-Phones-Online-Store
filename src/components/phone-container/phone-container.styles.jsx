import styled from "styled-components";

export const PhoneContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 350px;
  width: 300px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  flex-direction: column;
  align-self: center;
  opacity: 0.8;
  padding: 0px 20px;
  margin-top: 12%;
  display: none;

  ${PhoneContainerContainer}:hover & {
    display: flex;
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    margin-top: 32%;
    opacity: 1;

    ${PhoneContainerContainer}:active & {
      display: flex;
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 48%;
  }
`;

export const PhoneImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  margin-bottom: 5px;

  @media screen and (max-width: 480px) {
    margin-bottom: -40px;
  }
`;

export const PhoneTitle = styled.span`
  background-color: gray;
  color: black;
  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContentItem = styled.span`
  margin: 2px 0;
  padding: 0 25px;
  background-color: rgb(34, 33, 31);
  color: white;
  font-size: 18px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 0 18px;
  }
`;
