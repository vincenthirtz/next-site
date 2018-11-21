import Layout from "./Layout";
import Link from "next/link";
import styled from "styled-components";

const postFileNames =
    preval`
module.exports = require("fs").readdirSync("./posts")
` || [];

export const posts = postFileNames.map(name => {
    const {
        default: Component,
        meta: { title, id, author, yyyy, mm, dd }
    } = require("../posts/" + name);

    return {
        Component,
        title,
        id,
        author,
        yyyy,
        mm,
        dd
    };
});

export default props => (
    <div>
        <h1>My Blog</h1>
        <ul>
            {posts.map(post => (
                <Link
                    prefetch
                    href={`/post?id=${post.id}`}
                    as={`/${post.yyyy}/${post.mm}/${post.dd}/${post.id}/${post.title}`}
                >
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
    </div>
);
