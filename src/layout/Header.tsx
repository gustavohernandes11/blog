import { IconButton } from "components/IconButton";
import { Logo } from "components/Logo";
import styled, { css } from "styled-components";
import { ArrowLeft, Moon } from "@styled-icons/fa-solid";

export const Header = () => {
    return (
        <StyledHeader>
            <IconButton>
                <ArrowLeft size={16} />
            </IconButton>
            <Logo />
            <IconButton>
                <Moon size={16} />
            </IconButton>
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
    ${({ theme }) => css`
        display: flex;    
        position: sticky;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        grid-area: header;
        padding: 0 1rem;
        height: 100%,
        width: 100%;
        background-color: ${theme.color.secondaryBackground};
    `}
`;