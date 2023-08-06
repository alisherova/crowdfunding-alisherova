import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const CardWrapper = styled(Link)`
  width: 32%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  color: unset;
  text-decoration: none;
  animation: ${fadeInAnimation} 0.5s ease-in;

  @media screen and (max-width: 520px) {
    width: 48%;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Title = styled.p`
  color: #5c6260;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
`;

export const CardContent = styled.div`
  height: 65px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const FundsToBeRaised = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;
  background-color: #dde0df;
`;

export const RaisedAmountProgressBar = styled.div`
  width: ${props => props.width}%;
  height: 3px;
  background-color: #39a686;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  margin-top: auto;
`;

export const SupportBtn = styled.button`
  background: #39a686;
  color: #ffffff;
  border: 1px solid #39a686;
  border-radius: 5px;
  padding: 3px 8px;
  margin-top: 18px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #39a686;
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 920px) {
    padding: 1px 5px;
    font-size: 10px;
  }
`;
