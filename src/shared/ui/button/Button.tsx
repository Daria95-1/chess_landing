import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  height?: string;
  width?: string;
}

export const CustomButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ textColor }) => textColor || 'var(--color-black)'};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : 'none'};
  border-radius: 20px;

  height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || 'auto'};

  cursor: pointer;
  padding: 0 20px;
  font: inherit;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hoverBgColor, bgColor }) => hoverBgColor || bgColor || 'transparent'};
    color: ${({ hoverTextColor, textColor }) => hoverTextColor || textColor || 'var(--color-black)'};
    border-color: transparent;
  }
`;