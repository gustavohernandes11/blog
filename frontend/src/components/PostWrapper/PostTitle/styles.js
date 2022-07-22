import styled, { css } from "styled-components";

export const Element = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.fontSizes.md};
    `}
`;
