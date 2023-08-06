import { styled } from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 960px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Campaign = styled.main`
  margin-top: 50px;
`;

export const CampaignHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`;

export const MainImage = styled.img`
  display: block;
  width: 64%;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CampaignDetails = styled.div`
  width: 34%;
  padding: 10px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Amount = styled.p`
  color: #5c6260;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const TotalAmount = styled.p`
  margin-bottom: 30px;
  color: #5c6260;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Strong = styled.span`
  font-size: 34px;
  font-weight: 600;
  color: #39a686;
`;

export const Supporter = styled.p`
  margin: 20px 0;
  font-weight: 500;
`;

export const DaysLeft = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Button = styled.button`
  background-color: #39a686;
  color: #fff;
  border: 1px solid #39a686;
  border-radius: 5px;
  padding: 8px 22px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #39a686;
    transition: all 0.2s ease-in;
  }
`;

export const CampaignContent = styled.div`
  width: 64%;
  margin-top: 30px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CampaignTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 600;
`;

export const CampaignSummary = styled.p`
  background-color: #dbf3ec;
  padding: 20px 25px;
  border-radius: 30px 0 30px 0;
  margin-bottom: 25px;
`;

export const CampaignDescription = styled.p`
  margin-bottom: 30px;
`;
