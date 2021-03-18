import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  > img {
    width: 70%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  @media (min-width: 1700px) {
    > img {
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    > img {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1192px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin: 1rem 0;

  > div {
    display: flex;
    align-items: center;
  }

  > div > img {
    width: 2rem;
    height: 2rem;
  }

  > div > h4 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.5rem;
    font-family: 'Nunito';
    font-weight: 800;
    line-height: 1.8rem;
    margin-top: 0.2rem;
  }

  @media (min-width: 768px) {
    > div > h4 {
      color: #d2d3c8;
    }
  }

  @media (min-width: 1280px) {
    > div > h4 {
      color: #0b0b09;
    }
  }

  > a {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-decoration: none;
  }

  > a span {
    position: absolute;
    display: block;
    background: #be2a32;
    transition: transform ease 0.15s;
  }

  > a span:nth-child(1) {
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    transform: scaleY(1);
    transform-origin: bottom;
    transition-delay: 0s;
  }

  > a:hover span:nth-child(1) {
    transform: scaleY(0);
    transform-origin: bottom;
  }

  > a span:nth-child(2) {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    transition-delay: 0.15s;
  }

  > a:hover span:nth-child(2) {
    transform: scaleY(1);
    transform-origin: left;
  }
`;

export const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 45px - 2rem);
  max-width: 1192px;

  section {
    width: 50%;
  }

  > section:nth-child(1) h1 {
    font-size: 3.5rem;
    font-family: sans-serif;
    color: #0b0b09;
    line-height: 3.5rem;
  }

  > section:nth-child(1) p {
    font-size: 1.5rem;
    font-family: 'Nunito';
    font-weight: 200;
    text-align: justify;
    color: #0b0b09;
    line-height: 1.3rem;
    margin-top: 2rem;
  }

  > section:nth-child(2) > img {
    width: 80%;
    margin-left: 2rem;
  }
`;
