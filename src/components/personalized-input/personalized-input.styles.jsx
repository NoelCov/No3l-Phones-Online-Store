import styled from "styled-components";

export const PersonalizedInputContainer = styled.input`
  height: 4vh;
  text-align: center;
  border: none;
  background-color: white;
  color: gray;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: black;
    opacity: 0.8;
  }
}

@media screen and (max-width: 800px) {
    width: 80%;
}

@media screen and (max-width: 480px) {
    font-size: 14px;
}`;
