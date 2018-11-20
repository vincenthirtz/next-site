import React from "react";
import styled from "styled-components";
import Photo from "../components/instagramTemplates/frame";
import Layout from "./layout.js";

export default ({
    url: {
        query: { id }
    }
}) => (
    <Layout>
            <ZoneStyled>
                <WrapperStyled>
                    <Photo id={id} />
                </WrapperStyled>
            </ZoneStyled>
    </Layout>
);

// const MainStyled = styled.div`
//     filter: blur(10px);
// `;
const ZoneStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const WrapperStyled = styled.div`
    background: #ffffff;
    margin: 0 auto;
    width: 48em;
    max-width: 90%;
    overflow: auto;
`;
