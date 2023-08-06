import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 22px;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
`;

export const CloseButton = styled.div`
  margin-top: 5px;
`;
