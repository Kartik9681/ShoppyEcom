import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from '../styles/Button'

const MainSection = ({myData}) => {

  const {name} = myData;
  const {btnn} = myData;
  
  return(
  <Wrapper>
    <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to </p>
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <NavLink to='/products'>
                    <Button>{btnn}</Button>
                </NavLink>
            </div>
            <div className='hero-section-image'>
                <figure>
                    <img src = "images/main1.jpg" alt = "No IMG" className='image-style'></img>
                </figure>
            </div>
        </div>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 10rem 0;

  img {
    min-width: 30rem;
    height: 30rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgb(255,255,200);
      position: absolute;
      left: 20%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default MainSection
