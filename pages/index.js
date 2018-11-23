import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";

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
    <FlexStyled>
        <TricksStyled>
            <h1>
                <i class="fab fa-dev" />
            </h1>
            <UlStyled>
                {posts.map(post => (
                    <Link
                        prefetch
                        href={`/post?id=${post.id}`}
                        as={`/${post.yyyy}/${post.mm}/${post.dd}/${post.id}/${
                            post.title
                        }`}
                    >
                        <LiStyled>
                            <TitleStyled>{post.title} </TitleStyled>
                            <DateStyled>
                                {post.dd}/{post.mm}/{post.yyyy}
                            </DateStyled>
                        </LiStyled>
                    </Link>
                ))}
            </UlStyled>
        </TricksStyled>

        <InfosStyled>
            <h1>
                <i class="fab fa-twitch" />
            </h1>
            <UlStyled>
                {posts.map(post => (
                    <Link
                        prefetch
                        href={`/post?id=${post.id}`}
                        as={`/${post.yyyy}/${post.mm}/${post.dd}/${post.id}/${
                            post.title
                        }`}
                    >
                        <LiStyled>
                            <TitleStyled>{post.title} </TitleStyled>
                            <DateStyled>
                                {post.dd}/{post.mm}/{post.yyyy}
                            </DateStyled>
                        </LiStyled>
                    </Link>
                ))}
            </UlStyled>
        </InfosStyled>

        <PartThreeStyled>
            <h1>
                <i class="fab fa-js" />
            </h1>
            <UlStyled>
                {posts.map(post => (
                    <Link
                        prefetch
                        href={`/post?id=${post.id}`}
                        as={`/${post.yyyy}/${post.mm}/${post.dd}/${post.id}/${
                            post.title
                        }`}
                    >
                        <LiStyled>
                            <TitleStyled>{post.title} </TitleStyled>
                            <DateStyled>
                                {post.dd}/{post.mm}/{post.yyyy}
                            </DateStyled>
                        </LiStyled>
                    </Link>
                ))}
            </UlStyled>
        </PartThreeStyled>
    </FlexStyled>
);

const FlexStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TricksStyled = styled.div`
    flex: 1;
`;
const InfosStyled = styled.div`
    flex: 1;
`;
const PartThreeStyled = styled.div`
    flex: 1;
`;

const UlStyled = styled.div`
    padding: 0;
`;

const TitleStyled = styled.span`
    font-size: 16px;
`;

const LiStyled = styled.li`
    list-style: none;
    display: flex;
    align-items: baseline;
`;

const DateStyled = styled.div`
    font-size: 11px;
    color: ${vars.bodyColorLight};
`;
