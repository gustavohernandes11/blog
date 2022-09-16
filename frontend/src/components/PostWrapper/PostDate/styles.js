import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        font-size: ${theme.fontSizes.sm};
        margin: 0;
    `}
`;
