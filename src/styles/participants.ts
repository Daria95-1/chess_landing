import styled from "styled-components";
import { imageApp } from '../shared/const/image';

interface CounterTotalProps {
  $isLast: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 200px 0 140px 0;
  padding: 0 70px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    margin: 200px 0 140px 0;
    padding: 0 50px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const FirstBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-size: 54px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    padding-left: 10px;
  }
`;

export const DesktopCounterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const MobileCounterNav = styled.div`
  display: none;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
  }
`;


export const CounterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CounterWrapper = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const CounterNumber = styled.span`
  color: var(--color-text);
`;

export const CounterTotal = styled.span<CounterTotalProps>`
  color: ${({ $isLast }) => ($isLast ? 'gray' : 'var(--color-text)')};
  margin-left: 4px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CircleBackground = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-image: url(${imageApp.texture});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PlayerImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

export const Name = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export const Role = styled.p`
  color: gray;
  font-size: 14px;
`;

export const SwiperSlideWrapper = styled.div`
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;
