import React from "react";
import InstagramEmbed from "react-instagram-embed";
import styled from "styled-components";

export default class extends React.Component {
    render() {
        const instagramUrl = "https://instagr.am/p/";
        const cards = [
            { url: "Bp2yY0sjg3e" },
            { url: "BmqvZiwnvo8" },
            { url: "BRvOyjjFm4F" },
            { url: "BgLnaknAxvy" },
            { url: "BSb8E9IleEQ" }
        ];

        return (
            <ListCardStyled>
                {cards.map(card => (
                    <InstagramEmbed
                        id="toto"
                        url={instagramUrl + card.url}
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
                ))}
            </ListCardStyled>
        );
    }
}

const ListCardStyled = styled.div`
    display: flex;
    & > * {
        padding: 0 15px;
    }
`;
