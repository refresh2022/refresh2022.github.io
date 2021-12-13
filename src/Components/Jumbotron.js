import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../Assets/marina.jpg';

const Title = styled.h1`
font-size: 5em;
text-align: center;
color: white;
    `;
const Subtitle = styled.p`
font-size: 2em;
text-align: center;
color:  white;
  
`;

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  

  
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Title> REFRESH 2022 </Title>
        <Subtitle>3rd International Workshop on Real-life modeling in 5G/6G networks and beyond </Subtitle> 
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;