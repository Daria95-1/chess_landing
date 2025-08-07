import styled from 'styled-components';

export const TickerWrapper = styled.div`
  overflow: hidden;
  background-color: var(--color-coral);
  color: white;
  font-size: 24px;
  font-weight: 500;
  white-space: nowrap;
`;

export const TickerContent = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  will-change: transform;
  font-size: 18px;
  text-transform: uppercase;
  gap: 10px
`;