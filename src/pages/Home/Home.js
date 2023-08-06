import React from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { CardsContainer, SidebarContainer, Wrapper } from "./Home.styled";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const datas = [
    {
      _id: 1,
      img: "../../public/assets/educationImg.png",
      title:
        "Ta'lim bilan to'siqlarni yengib o'tish: o'zimni moliyalashtirishga yordam bering",
      lineWidth: 40
    },
    {
      _id: 2,
      img: "../../public/assets/orphanImg.png",
      title: "Yolg'iz onalarni qo'llab-quvvatlash",
      lineWidth: 60
    },
    {
      _id: 3,
      img: "../../public/assets/medicalImg.png",
      title: "Kimgadir operatsiyani bajarishga yordam berish",
      lineWidth: 20
    },
    {
      _id: 10,
      img: "../../public/assets/educationImg.png",
      title:
        "Ta'lim bilan to'siqlarni yengib o'tish: o'zimni moliyalashtirishga yordam bering",
      lineWidth: 40
    },
    {
      _id: 20,
      img: "../../public/assets/orphanImg.png",
      title: "Yolg'iz onalarni qo'llab-quvvatlash",
      lineWidth: 60
    },
    {
      _id: 30,
      img: "../../public/assets/medicalImg.png",
      title: "Kimgadir operatsiyani bajarishga yordam berish",
      lineWidth: 20
    },
    {
      _id: 4,
      img: "../../public/assets/educationImg.png",
      title:
        "Ta'lim bilan to'siqlarni yengib o'tish: o'zimni moliyalashtirishga yordam bering",
      lineWidth: 40
    },
    {
      _id: 5,
      img: "../../public/assets/orphanImg.png",
      title: "Yolg'iz onalarni qo'llab-quvvatlash",
      lineWidth: 60
    },
    {
      _id: 6,
      img: "../../public/assets/medicalImg.png",
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
