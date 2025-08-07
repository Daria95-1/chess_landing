import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 70px 0 70px;
  height: auto;
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    gap: 45px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 1130px;
    font-size: 36px;
`;

export const DarkText = styled.span`
    color: var(--color-text);
    text-transform: uppercase;
    font-weight: 400;
`;

export const LightText = styled.span`
    color: var(--color-coral);
    text-transform: uppercase;
    font-weight: 700;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextSecondary = styled.h2`
    font-size: 36px;
    width: 800px;
    margin-bottom: 30px;
`;

export const SubTitle = styled.p`
    color: var(--color-blue);
    font-size: 20px;
    margin-top: 30px;
`;