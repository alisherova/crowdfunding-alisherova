import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 10px;
  margin-left: 42px;
  display: inline-block;
  color: #5c6260;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 60%;
    height: 1px;
    background-color: #a7abaa;

    @media screen and (max-width: 1300px) {
      width: 75%;
    }
  }

  @media screen and (max-width: 920px) {
    margin-left: 20px;
  }

  @media (max-width: 576px) {
    line-height: 40px;
  }
`;
