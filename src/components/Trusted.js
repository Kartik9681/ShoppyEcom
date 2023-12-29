import React from 'react'
import styled from 'styled-components'
import { TiInfinity } from "react-icons/ti";
import { DiNodejs } from "react-icons/di";
import { BiCoinStack } from "react-icons/bi";
import { DiApple } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiStackoverflow } from "react-icons/di";
const Trusted = () => {
  return (
<Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <TiInfinity className="icon" />
          <DiNodejs className="icon" />
          <BiCoinStack className="icon" />
          <DiApple className="icon" />
          <DiDjango className="icon" />
          <DiBootstrap className="icon" />
          <DiStackoverflow className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }  
   .icon {
      min-width: 6rem;
      height: 6rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }
  
  
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .brand-section-slider {
        margin-top: 3.2rem;
        display: grid;
  
        grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  
        /* grid-template-columns: 1fr 1fr; */
        /* background-color: red; */
        text-align: center;
      }
    }
`;

export default Trusted
