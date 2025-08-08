import styled from 'styled-components';

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
`;

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  font-size: 28px;
  color: var(--color-white);
  width: 50px;
  height: 50px;
  background: var(--color-black);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ disabled }) => (disabled ? 'var(--color-text-grey)' : 'var(--color-yellow)')};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;