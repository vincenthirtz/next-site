import LeftMenu from "./LeftMenu";
import styled from "styled-components";
import vars from "./Variables";

class Layout extends React.Component {
    state = {
        leftMenuSmall: false
    };
    storeSmall = small => {
        this.setState({ small: !small });
    };

    toggleLeftMenu = () => {
        const leftMenuSmall = !this.state.leftMenuSmall;
        this.storeSmall(leftMenuSmall);
        this.setState({ leftMenuSmall });
    };

    render() {
        const { leftMenuSmall } = this.state;

        return (
            <React.Fragment>
                <LayoutStyled>
                    <React.Fragment>
                        <LeftMenuStyled small={leftMenuSmall}>
                            <ToggleIconStyled onClick={this.toggleLeftMenu}>
                                <i
                                    class={`fas fa-angle-${
                                        leftMenuSmall ? "right" : "left"
                                    }`}
                                />
                            </ToggleIconStyled>
                            <ToggleIconStyled shadow />
                            <LeftMenu />
                        </LeftMenuStyled>
                    </React.Fragment>
                    <MainStyled>
                        <HeaderStyled />
                        <ChildrenStyled>{this.props.children}</ChildrenStyled>
                    </MainStyled>
                </LayoutStyled>
            </React.Fragment>
        );
    }
}

export default Layout;

const shadow = "0px 0 5px #ddd";

const LayoutStyled = styled.div`
    html {
        color: ${vars.bodyColor};
        font-weight: 100;
        font-size: 1em;
        font-family: ${vars.defaultFont};
        line-height: 16px;
    }
    html,
    body {
        height: 100%;
    }
    body {
        margin: 0;
    }

    display: flex;
    flex-direction: row;
    height: 100%;
`;

const LeftMenuStyled = styled.div`
    visibility: ${props => (props.isXsToggle ? "" : "hidden")};
    position: fixed;
    top: 0;
    left: 0;
    width: ${props => (props.isXsToggle ? "85%" : "0%")};
    transition: all linear 250ms;
    font-size: ${props => (props.isXsToggle ? "20px" : "0")};
    height: calc(100% - ${vars.mobileNavBarHeight});
    z-index: 5;

    @media screen and (min-width: ${vars.screenXsMin}) {
        font-size: inherit;
        visibility: visible;
        width: ${props => (props.small ? "60px" : "250px")};
        height: 100%;
        position: relative;
        top: auto;
        left: auto;
        transition: all linear 350ms;
        box-shadow: ${shadow};
    }
`;

const ToggleIconStyled = styled.div`
    display: none;
    @media screen and (min-width: ${vars.screenXsMin}) {
        display: initial;
        position: absolute;
        top: calc(${vars.headerHeight} - 25px);
        right: -20px;
        background: #fff;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: ${vars.bodyColorLight};
        text-align: center;
        cursor: pointer;
        z-index: ${props => (props.shadow ? "-1" : "2")};
        box-shadow: ${props => (props.shadow ? shadow : "none")};
    }
`;

const MainStyled = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${vars.bodyBackground};
    overflow: auto;
`;

const HeaderStyled = styled.div`
    @media screen and (min-width: ${vars.screenXsMin}) {
        height: ${vars.headerHeight};
        line-height: ${vars.headerHeight};
        background: #fff;
        box-shadow: ${shadow};
    }
`;

const ChildrenStyled = styled.div`
    flex: 1;
    padding: 0;
    overflow: auto;
    @media screen and (min-width: ${vars.screenXsMin}) {
        padding: 35px 45px;
    }
`;
