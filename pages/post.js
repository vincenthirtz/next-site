import React from "react";
import { withRouter } from "next/router";

const postFileNames =
    preval`
module.exports = require("fs").readdirSync("./posts")
` || [];

const posts = postFileNames.map(name => {
    const {
        default: Component,
        meta: { title, id, author, date }
    } = require("../posts/" + name);

    return {
        Component,
        title,
        id,
        author,
        date
    };
});

const Content = withRouter(props => (
    <div>
        {posts.map(post => (
            <React.Fragment>
                {parseInt(post.id) === parseInt(props.router.query.id) && (
                    <h2>{post.title}</h2>
                )}
                {parseInt(post.id) === parseInt(props.router.query.id) && (
                    <post.Component />
                )}
            </React.Fragment>
        ))}
    </div>
));

const Page = props => (
    <React.Fragment>
        <Content />
    </React.Fragment>
);
export default Page;
