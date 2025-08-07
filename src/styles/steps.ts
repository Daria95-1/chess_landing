import styled from "styled-components";
import { imageApp } from "../shared/const/image";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 200px 0 0 0;
  padding: 0 70px;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FirstTitle = styled.h2`
  font-size: 54px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;
`;

export const SecondTitle = styled.h2`
  font-size: 54px;
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 400;
`;

export const SubTitle = styled.h2`
  width: 270px;
  font-size: 20px;
  color: var(--color-blue);
  font-weight: 400;
`;

export const TextLimit = styled.h2`
  max-width: 700px;
  font-size: 20px;
  font-weight: 400;
`;

export const BlockContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 54px;
  position: relative;
  z-index: 1;

&::after {
  content: '';
  position: absolute;
  bottom: 50px;
  right: 20px;
  width: 400px;
  height: 400px;
  background-image: url(${imageApp.plane});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  pointer-events: none;
  z-index: 0;
}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 112px;
  font-size: 20px;
  background-image: url(${imageApp.texture});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  gap: 15px;
  box-sizing: border-box;
`;

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
`;

export const ItemSpan2Cols = styled(Item)`
  width: calc(200% + 20px);
`;

export const ItemSpan2Rows = styled(Item)`
  height: calc(112px * 2 + 20px);
`;
