import styled from 'styled-components'
import { imageApp } from '../shared/const/image'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 200px 0 0 0;
  padding: 0 70px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    margin: 120px 0 0 0;
    padding: 0 50px;
  }

  @media (max-width: 800px) {
    margin: 120px 0 0 0;
    padding: 0 20px;
  }
`

export const TextDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    display: none;
  }
`

export const TextMobilContainer = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    gap: 5px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 870px) {
    margin-bottom: 120px;
  }

  @media (max-width: 800px) {
    margin-top: -45px;
  }
`

export const FirstTitle = styled.h2`
  font-size: 54px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 800px) {
    width: 335px;
    font-size: 28px;
    margin: 25px auto;
  }
`

export const SecondTitle = styled.h2`
  font-size: 54px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 800px) {
    width: 335px;
    font-size: 28px;
    margin: 25px auto;
  }
`

export const SubTitle = styled.h2`
  width: 270px;
  font-size: 20px;
  color: var(--color-blue);
  font-weight: 400;

  @media (max-width: 800px) {
    width: 335px;
    margin: 25px auto;
  }
`

export const TextLimit = styled.h2`
  max-width: 550px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 1560px) {
    max-width: 400px;
  }

  @media (max-width: 1400px) {
    max-width: 300px;
  }

  @media (max-width: 1300px) {
    font-size: 18px;
  }
`

export const BlockContainer = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  margin-top: 54px;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 400px;
    height: 400px;
    background-image: url(${imageApp.plane});
    background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: 0;

    @media (max-width: 1300px) {
      width: 350px;
      height: 250px;
      bottom: 120px;
      right: 0px;
    }

    @media (max-width: 1100px) {
      width: 350px;
      height: 250px;
      bottom: 150px;
      right: 0px;
    }

    @media (max-width: 870px) {
      width: 320px;
      bottom: -10px;
      right: calc(-85vw + 100%);
    }
  }
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 870px) {
    display: none;
  }
`

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 112px;
  font-size: 20px;
  background-image: url(${imageApp.texture});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  gap: 15px;
  box-sizing: border-box;

  @media (max-width: 1300px) {
    font-size: 18px;
    height: 180px;
  }
`

export const Circle = styled.div`
  min-width: 40px;
  height: 40px;
  background: var(--color-white);
  border-radius: 50%;
  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`

export const ItemSpan2Cols = styled(Item)`
  width: calc(200% + 20px);

  @media (max-width: 870px) {
    height: calc(180px * 2);
  }
`

export const ItemSpan2Rows = styled(Item)`
  height: calc(112px * 2 + 20px);

  @media (max-width: 1300px) {
    height: calc(180px * 2 + 20px);
  }

  @media (max-width: 870px) {
    height: calc(180px * 2);
  }
`

export const SwiperSlideWrapper = styled.div`
  width: 100%;

  .swiper-slide {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
  }

  .custom-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .swiper-pagination-bullet {
    background: var(--color-black);
    opacity: 0.3;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-text);
  }
`
export const SlideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 870px) {
      gap: 0;
  }
`

export const Pagination = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  max-width: 100px;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-black);
    opacity: 0.3;
    cursor: pointer;
    transition: all 0.3s ease;

    display: block;
    margin: 0 !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-black);
  }
`