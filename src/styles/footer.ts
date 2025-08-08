import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    background: var(--color-beige);
    width: 100%;
    padding: 0 70px;

    @media (max-width: 1000px) {
    padding: 0 50px;
    }

    @media (max-width: 800px) {
        padding: 0 20px;
    }
`;

export const Content = styled.div`
    display: flex;
    background: var(--color-beige);
    padding: 20px 0;
    margin: 0 auto;
`;