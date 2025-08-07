import styled from 'styled-components';
import { imageApp } from '../shared/const/image';

export const WrapperMainBlock = styled.div`
  position: relative;
  background-image: url(${imageApp.texture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  overflow: hidden;
  width: 100%;

  // 725px
`;

export const CityLayer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imageApp.city});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 60px;
  margin-left: 70px;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 25px;
  margin-left: 70px;
`;

export const TitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const TitlePartOne = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  width: 600px;
`;

export const TitlePartTwo = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  margin-left: 90px;
`;

export const TitlePartThree = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  margin-left: 30px;
`;

export const Section = styled.section`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Buttons = styled.section`
  display: flex;
  gap: 20px;
`;

export const TextBlock = styled.div`
  display: flex;
  text-align: center;
  width: 400px;
  margin-top: 25px;
`;