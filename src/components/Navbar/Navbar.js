import React, { useState } from "react";

import {
  FullPage,
  NavbarWrapper,
  Logo,
  LogoImg,
  NavbarUlList,
  NavbarUl,
  NavbarBtn,
  BurgerButton,
  SmallScreenLogo,
  SmallScreenWrapper,
  NavShadow
} from "./Navbar.styled.js";
import LogoSvg from "../../assets/Logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNav = () => {
    setShowNavLinks(prevShow => !prevShow);
  };

  const handleClick = index => {
    setActiveIndex(index);
  };
  console.log(showNavLinks);

  const MENU_ITEMS = ["Bosh sahifa", "Biz haqimizda", "Savol-javoblar"];

  return (
    <>
      <FullPage
        show={showNavLinks.toString()}
        onClick={() => setShowNavLinks(false)}
      />
      <NavShadow>
        <SmallScreenWrapper>
          <SmallScreenLogo to="/">
            <LogoImg src={LogoSvg} alt="Crowdfunding logo" />
          </SmallScreenLogo>
          <BurgerButton onClick={toggleNav}>
            {!showNavLinks ? <CiMenuBurger /> : <AiOutlineClose />}
          </BurgerButton>
        </SmallScreenWrapper>
        <NavbarWrapper show={showNavLinks.toString()}>
          <Logo to="/">
            <LogoImg src={LogoSvg} alt="Crowdfunding logo" />
          </Logo>
          <NavbarUl>
            {MENU_ITEMS.map((item, index) => (
              <NavbarUlList
                key={index}
                active={(activeIndex === index).toString()}
                onClick={() => handleClick(index)}
                to={"/"}>
                {item}
              </NavbarUlList>
            ))}
          </NavbarUl>
          <NavbarBtn>Xayriya tashkillashtirish</NavbarBtn>
        </NavbarWrapper>
      </NavShadow>
    </>
  );
};

export default Navbar;
