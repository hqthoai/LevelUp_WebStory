import React from 'react';
import styled from 'styled-components';
import './NewSlideImage.scss';

const Project = (props) => {
  const { gameImageUrl, gameName, gameUrl } = props.item;
  return (
    <Container className="project">
      <a href={gameUrl}>
        <img src={gameImageUrl} alt="project" />
      </a>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 13rem;
  //   background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 400ms ease-in-out;
  }

  // :hover > img {
  //   transform: scale(1.3);
  // }

  // :hover > .disc {
  //   bottom: 0;
  // }
`;
