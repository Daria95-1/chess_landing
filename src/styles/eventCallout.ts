import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 70px 0 70px;
    height: auto;

    @media (max-width: 1000px) {
        margin: 20px 50px 0 50px;
    }

    @media (max-width: 800px) {
        margin: 20px 10px 0 10px;
    }
`;

export const DesktopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    gap: 45px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const MobilSection = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
    align-items: center;
    gap: 45px;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 1130px;
    font-size: 36px;
    gap: 5px;

    @media (max-width: 1000px) {
        width: 800px;
        font-size: 30px;
    }

    @media (max-width: 800px) {
        width: 335px;
        font-size: 28px;
        margin: 25px auto 25px auto;
    }
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

export const Image = styled.span`
    max-width: 394px;
    min-width: 335px;
    height: auto;
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

    @media (max-width: 800px) {
        width: 335px;
    }
`;