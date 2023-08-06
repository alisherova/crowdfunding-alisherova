import React from "react";
import {
  CardWrapper,
  CardImg,
  Title,
  FundsToBeRaised,
  RaisedAmountProgressBar,
  CardFooter,
  CardContent,
  SupportBtn
} from "./Card.styled";

const Card = ({ data }) => {
  return (
    <CardWrapper to={`/${data._id}`}>
      <CardImg src={data.img} alt={data.title} />
      <CardContent>
        <Title>{data.title}</Title>
      </CardContent>
      <CardFooter>
        <FundsToBeRaised>
          <RaisedAmountProgressBar width={data.lineWidth} />
        </FundsToBeRaised>
        <SupportBtn>Qo&apos;llab-quvvatlash</SupportBtn>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
