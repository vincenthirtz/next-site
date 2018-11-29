import React from "react";
import Link from "next/link";
import Disqus from 'disqus-react';
import { withRouter } from "next/router";
import styled from "styled-components";
import {
    postsDev,
    postsTwitch,
    postsJs,
    postsReact,
    postsPhp,
    postsHtml
} from "./index";

const Page = withRouter(props => {
    let posts = [];
    let currentPost = {};

    switch (props.router.query.category) {
        case "dev":
            posts.concat(postsDev);
            postsDev.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;
        case "twitch":
            posts.concat(postsTwitch);
            postsTwitch.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;
        case "js":
            posts.concat(postsJs);
            postsJs.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;
        case "react":
            posts.concat(postsReact);
            postsReact.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;
        case "php":
            posts.concat(postsPhp);
            postsPhp.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;
        case "html":
            posts.concat(postsHtml);
            postsHtml.map(post => {
                if (post.id === parseInt(props.router.query.id)) {
                    currentPost = Object.assign({}, post);
                }
            });
            break;

        default:
            posts = [];
            break;
    }

    const disqusShortname = "vincenthirtz";
        const disqusConfig = {
            url: props.router.asPath,
            identifier: currentPost.id,
            title: currentPost.title,
        };

    return (
        <React.Fragment>
            <BackIconStyled>
                <Link href="/">
                    <i className="fas fa-angle-left" />
                </Link>
            </BackIconStyled>
            <h2>{currentPost && currentPost.title}</h2>
            {currentPost && currentPost.Component && <currentPost.Component />}
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </React.Fragment>
    );
});

export default Page;

const BackIconStyled = styled.div`
    font-size: 2em;
    cursor: pointer;
`;
