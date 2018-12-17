import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";

class LeftMenu extends React.Component {
    render() {
        const { small } = this.props;

        return (
            <LeftMenuStyled>
                <LogoStyled small={small}>
                    <Link prefetch href="/">
                        <img
                            src="https://cdn.discordapp.com/attachments/347394327204331532/516578471770718218/31092476.png"
                            alt
                        />
                    </Link>
                </LogoStyled>
                <MenuItemsStyled small={small}>
                    <React.Fragment>
                        <Link prefetch href="/">
                            <MenuItemStyled>
                                {small ? (
                                    <i className="fas fa-edit" />
                                ) : (
                                    <TextStyled>
                                        <i className="fas fa-edit" />
                                        <a>Blog</a>
                                    </TextStyled>
                                )}
                            </MenuItemStyled>
                        </Link>
                        <Link prefetch href="/moments">
                            <MenuItemStyled>
                                {small ? (
                                    <i className="fas fa-camera-retro" />
                                ) : (
                                    <TextStyled>
                                        <i className="fas fa-camera-retro" />
                                        <a>Photos</a>
                                    </TextStyled>
                                )}
                            </MenuItemStyled>
                        </Link>
                        <Link prefetch href="/movies">
                            <MenuItemStyled>
                                {small ? (
                                    <i className="fas fa-film" />
                                ) : (
                                    <TextStyled>
                                        <i className="fas fa-film" />
                                        <a>Films</a>
                                    </TextStyled>
                                )}
                            </MenuItemStyled>
                        </Link>
                        <Link prefetch href="/about">
                            <MenuItemStyled>
                                {small ? (
                                    <i className="fas fa-address-card" />
                                ) : (
                                    <TextStyled>
                                        <i className="fas fa-address-card" />
                                        <a>About</a>
                                    </TextStyled>
                                )}
                            </MenuItemStyled>
                        </Link>
                    </React.Fragment>
                </MenuItemsStyled>
            </LeftMenuStyled>
        );
    }
}

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
        cursor: pointer;
        border-radius: 50%;
        vertical-align: middle;
        max-height: ${props => (props.small ? "50px" : "80px")};
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
