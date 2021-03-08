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
`;
