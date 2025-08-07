import { imageApp } from '../shared/const/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url(${imageApp.texture});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 60px 20px;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const TitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const TitlePartOne = styled.h1`
  font-size: 64px;
  color: var(--color-text);
`;

export const TitlePartTwo = styled.h1`
  font-size: 64px;
  color: var(--color-text);
`;

export const TitlePartThree = styled.h1`
  font-size: 64px;
  color: var(--color-text);
`;

export const MainButton = styled.button`
color: var(--color-white);
  background: var(--color-black);
`;

export const SecondaryButton = styled.button`
  color: var(--color-black);
  background: transparent;
`;

export const Button = styled.button`
  color: var(--color-black);
  background: transparent;
  border: 1px solid var(--color-blue);
  border-radius: 20px
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TextBlock = styled.div`
  flex: 1;
  min-width: 300px;
`;