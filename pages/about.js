import React from "react";
import InstagramEmbed from "react-instagram-embed";
import styled from "styled-components";

export default () => (
    <AboutStyled>
        <InstagramEmbed
            url="https://instagr.am/p/BX8f5qknNi8"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
        <iframe
            src="https://discordapp.com/widget?id=311803297033879562&theme=dark"
            width="326"
            height="532"
            allowtransparency="true"
            frameborder="0"
        />
    </AboutStyled>
);

const AboutStyled = styled.div`
    display: flex;
    & > * {
        padding: 0 20px;
    }
`;
