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

const today = new Date(Date.now());
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

export default props => (
    <div>
        <h1>My Blog</h1>
        <ul>
            {posts.map(post => (
                <Link
                    prefetch
                    href={`/post?id=${post.id}`}
                    as={`/${yyyy}/${mm}/${dd}/${post.id}/${post.title}`}
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
