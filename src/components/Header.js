import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Yo>
        <img className = "logo" src="./images/logoo1.png" alt="my logo img" />
        <h2>Shoppy</h2>
        </Yo>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    width: 8rem;
    height: 5rem;
  }
`;
const Yo = styled.header`
display: flex;
align-items: center;
flex-direction: row`;

export default Header
