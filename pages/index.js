import Layout from "./layout.js";
import Link from "next/link";
import styled from "styled-components";

const postFileNames =
    preval`
module.exports = require("fs").readdirSync("./posts")
` || [];

export const posts = postFileNames.map(name => {
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

export default props => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {posts.map(post => (
                <Link prefetch as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                    <li>
                        <h2>{post.title}</h2>
                    </li>
                </Link>
            ))}
        </ul>
        <style jsx>{`
            h1,
            a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
);
