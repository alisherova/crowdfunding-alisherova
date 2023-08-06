import React from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { CardsContainer, SidebarContainer, Wrapper } from "./Home.styled";
import Filter from "../../components/Filter/Filter";
import Img1 from "../../assets/images/educationImg.png";
import Img2 from "../../assets/images/orphanImg.png";
import Img3 from "../../assets/images/medicalImg.png";

const Home = () => {
  const datas = [
    {
      _id: 1,
      img: Img1,
      title:
        "Ta'lim bilan to'siqlarni yengib o'tish: o'zimni moliyalashtirishga yordam bering",
      lineWidth: 40
    },
    {
      _id: 2,
      img: Img2,
      title: "Yolg'iz onalarni qo'llab-quvvatlash",
      lineWidth: 60
    },
    {
      _id: 3,
      img: Img3,
      title: "Kimgadir operatsiyani bajarishga yordam berish",
      lineWidth: 20
    }
  ];

  return (
    <Wrapper>
      <SidebarContainer>
        <SearchBar />
        <Filter />
      </SidebarContainer>
      <CardsContainer>
        {datas?.map(d => (
          <Card data={d} key={`${d._id}_card`} />
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default Home;
