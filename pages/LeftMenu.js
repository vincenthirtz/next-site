import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";

const LeftMenu = props => (
    <LeftMenuStyled>
        <LogoStyled />
        <MenuItemsStyled small>
            <React.Fragment>
                <Link prefetch href="/">
                    <MenuItemStyled>
                        <a>Home</a>
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/moments">
                    <MenuItemStyled>
                        <a>Photos</a>
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/movies">
                    <MenuItemStyled>
                        <a>Films à voir</a>
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/about">
                    <MenuItemStyled>
                        <a>About</a>
                    </MenuItemStyled>
                </Link>
            </React.Fragment>
        </MenuItemsStyled>
    </LeftMenuStyled>
);

export default LeftMenu;

const LeftMenuStyled = styled.div`
    height: 100%;
    background: #fff;
`;

const LogoStyled = styled.div`
    padding: 10px;
    height: 50px;
    line-height: 50px;
    img {
        max-width: 100%;
        vertical-align: middle;
        max-height: 50px;
    }
`;

const MenuItemsStyled = styled.ul`
    list-style: none;
    padding-left: 0px;
    line-height: 65px;
    & > li:not(:last-child) {
        border-bottom: 1px solid #dfdfdf;
    }
    @media screen and (min-width: ${vars.screenXsMin}) {
        & > li > .content > *:not(:first-child) {
            ${props => props.small && "display: none;"};
        }
    }
    & > li > .content > *:first-child {
        font-size: initial;
        @media screen and (min-width: ${vars.screenXsMin}) {
            width: ${props => (props.small ? "100%" : "")};
        }
    }
    ul {
        font-size: initial;
        list-style: none;
        line-height: 40px;
        padding-left: 35px;
        li {
            font-size: 0.9em;
        }
    }
`;

const MenuItemStyled = styled.li`
    color: ${vars.bodyColorLight};
    cursor: pointer;
    position: relative;
    text-align: center;

    &:hover {
        & > a {
            color: ${vars.actionColor};
        }
    }
`;
