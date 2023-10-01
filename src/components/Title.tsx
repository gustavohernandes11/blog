import styled, { css } from "styled-components";

export const Title = ({ children }: any) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export const StyledTitle = styled.h1`
    ${({ theme }) => css`
        margin-bottom: 2rem;

        @media (max-width: ${theme.screen.tablet}) {
            margin-bottom: 1.5rem;
        }

        @media (max-width: ${theme.screen.mobile}) {
            margin-bottom: 1rem;
        }
    `}
`;
