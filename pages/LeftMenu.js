import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";

const LeftMenu = props => (
    <LeftMenuStyled>
        <LogoStyled>
            <img
                src="https://cdn.discordapp.com/attachments/347394327204331532/516578471770718218/31092476.png"
                alt
            />
        </LogoStyled>
        <MenuItemsStyled small>
            <React.Fragment>
                <Link prefetch href="/">
                    <MenuItemStyled>
                        {props.small ? (
                            <i class="fas fa-home" />
                        ) : (
                            <TextStyled>
                                <i class="fas fa-home" />
                                <a>Blog</a>
                            </TextStyled>
                        )}
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/moments">
                    <MenuItemStyled>
                        {props.small ? (
                            <i class="fas fa-camera-retro" />
                        ) : (
                            <TextStyled>
                                <i class="fas fa-camera-retro" />
                                <a>Photos</a>
                            </TextStyled>
                        )}
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/movies">
                    <MenuItemStyled>
                        {props.small ? (
                            <i class="fas fa-film" />
                        ) : (
                            <TextStyled>
                                <i class="fas fa-film" />
                                <a>Films</a>
                            </TextStyled>
                        )}
                    </MenuItemStyled>
                </Link>
                <Link prefetch href="/about">
                    <MenuItemStyled>
                        {props.small ? (
                            <i class="fas fa-address-card" />
                        ) : (
                            <TextStyled>
                                <i class="fas fa-address-card" />
                                <a>About</a>
                            </TextStyled>
                        )}
                    </MenuItemStyled>
                </Link>
            </React.Fragment>
        </MenuItemsStyled>
    </LeftMenuStyled>
);

export default LeftMenu;

const TextStyled = styled.div`
    & > * {
        padding: 0 2px;
    }
`;

const LeftMenuStyled = styled.div`
    height: 100%;
    background: #fff;
`;

const LogoStyled = styled.div`
    padding: 10px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    img {
        border-radius: 50%;
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
        & > * {
            color: ${vars.actionColor};
        }
    }
`;
