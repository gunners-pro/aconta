import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  > img {
    width: 60%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
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
  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;
  }

  > div > img {
    width: 2rem;
    height: 2rem;
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
    transition: transform ease 0.2s;
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
    transition-delay: 0.2s;
  }

  > a:hover span:nth-child(2) {
    transform: scaleY(1);
    transform-origin: left;
  }
`;
