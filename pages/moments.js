import React from "react";
import vars from "./Variables";
import styled from "styled-components";

export default class extends React.Component {
    render() {
        return (
            <ListCardStyled>
                <section>
                    <article>
                        <figure>
                            <h2>Guizmo</h2>
                            <p>Musée Miniature et Cinéma, Lyon</p>
                        </figure>
                        <img
                            alt
                            src="https://scontent-cdg2-1.cdninstagram.com/vp/4766c8a194c712aed0c3ed8fdb3e4065/5C8DE5DE/t51.2885-15/e35/44236608_2234777633461986_5018535061906723190_n.jpg"
                        />
                    </article>
                </section>

                <svg width="0" height="0">
                    <defs>
                        <clipPath
                            id="hexagono"
                            clipPathUnits="objectBoundingBox"
                        >
                            <polygon points=".25 0, .75 0, 1 .5, .75 1, .25 1, 0 .5" />
                        </clipPath>
                    </defs>
                </svg>
            </ListCardStyled>
        );
    }
}

const ListCardStyled = styled.div`
    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    * {
        margin: 0;
        padding: 0;
        border: 0 none;
        position: relative;
    }

    --sinSerif: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    --Nhexa: 4;
    --gap: 2vw;
    --size: calc(calc(100vw / var(--Nhexa)) - var(--gap));

    @media only screen and (min-width: 1100px) {
        :root {
            --Nhexa: 6;
        }
    }
    @media only screen and (max-width: 600px) {
        :root {
            --Nhexa: 2;
        }
        body {
            margin-right: calc(var(--size) * 0.3);
        }
    }
    html {
        background: #e9e9e7;
        box-sizing: border-box;
        font-family: var(--sinSerif);
        font-size: 1rem;
    }
    body {
        padding-right: calc(var(--size) * 0.5);
        overflow-x: hidden;
        hyphens: auto;
    }
    section {
        margin:200px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(var(--Nhexa), 1fr);
        grid-gap: var(--gap);
    }
    article {
        background: white;
        width: var(--size);
        height: calc(var(--size) / 1.1111111);
        clip-path: url(#hexagono);
        clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
        margin-right: calc(var(--size) / 2);
        color: #fff;
        overflow: hidden;
    }
    article:nth-child(2n) {
        margin: calc(var(--size) * -0.5) calc(var(--size) * -0.25) 0
            calc(var(--size) * -0.75);
    }
    article::before {
        content: "";
        float: left;
        width: 25%;
        height: 100%;
        clip-path: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
        shape-outside: polygon(0% 0%, 100% 0%, 0% 50%, 100% 100%, 0% 100%);
    }
    img {
        width: var(--size);
        height: var(--size);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 0% 50%;
        transition: 0.75s;
        clip-path: url(#hexagono);
        clip-path: inherit;
        z-index: 10;
    }
    article:hover img {
        transform: translate(-50%, -50%) rotate(-110deg);
    }
    h2 {
        font-size: 100%;
    }
    figure {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        max-width: 50%;
        height: 100%;
        font-size: calc(9 / var(--Nhexa) * 1vw);
        line-height: 1;
        color: ${vars.bodyColor};
        transition: 0.75s 0.05s;
        text-align: center;
    }
    figure p {
        font-size: 70%;
        line-height: 1.2;
        width: 100%;
    }
    h1 {
        width: 100vw;
        background: #ff0066;
        position: sticky;
        top: 0;
        z-index: 1;
        margin-bottom: calc(var(--size) * 0.55 + var(--gap));
        padding: 2vh 0;
        text-align: center;
        font-weight: 400;
        color: #fff;
    }
    body > p {
        font-size: 1.5rem;
        margin: 2rem 0 1rem calc(var(--size) * 0.5);
        font-weight: 200;
    }
`;
