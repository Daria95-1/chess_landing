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
`;

export const CityLayer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  min-width: 630px;
  min-height: 630px;
  background-image: url(${imageApp.city});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  pointer-events: none;
  user-select: none;
  z-index: 0;

  @media (max-width: 730px) {
    background-position: center bottom;
    width: 100%;
    max-width: 100%;
    min-width: 630px;
    min-height: 630px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 60px;
  margin-left: 70px;

  @media (max-width: 730px) {
    margin-left: 20px;
    margin-top: 40px;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 25px;
  margin-left: 70px;

  @media (max-width: 730px) {
    width: 210px;
    height: 30px;
    margin-left: 50px;
  }

  @media (max-width: 400px) {
    width: 210px;
    height: 30px;
    margin-left: 20px;
  }
`;

export const TitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  @media (max-width: 730px) {
    align-items: center;
  }
`;

export const TitlePartOne = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  width: 600px;

  @media (max-width: 730px) {
    font-size: 36px;
    width: 330px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const TitlePartTwo = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  margin-left: 90px;

  @media (max-width: 730px) {
    font-size: 36px;
    width: 330px;
    margin-left: 70px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const TitlePartThree = styled.h1`
  font-size: 64px;
  color: var(--color-text);
  margin-left: 30px;

  @media (max-width: 730px) {
    font-size: 36px;
    width: 330px;
    margin-left: 50px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const Section = styled.section`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 730px) {
    width: 100%;
    gap: 20px;
  }
`;

export const Buttons = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  text-align: center;
  width: 400px;
  margin-top: 25px;
  font-size: 20px;

  @media (max-width: 730px) {
    width: 335px;
    font-size: 18px;
  }
`;
