import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";
import blogService from "../services/blogService";

const postsDev = blogService.PostsCategoryDev();
const postsTwitch = blogService.PostsCategoryTwitch();
const postsJs = blogService.PostsCategoryJs();

export default props => (
    <React.Fragment>
        <FlexStyled>
            <TricksStyled>
                <h1>
                    <i class="fab fa-dev" />
                </h1>
                <UlStyled>
                    {postsDev.map(post => (
                        <Link
                            prefetch
                            href={`/post?id=${post.id}`}
                            as={`/${post.yyyy}/${post.mm}/${
                                post.dd
                            }/${post.title.replace(/\s/g, "-")}`}
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
                    {postsTwitch.map(post => (
                        <Link
                            prefetch
                            href={`/post?id=${post.id}`}
                            as={`/${post.yyyy}/${post.mm}/${post.dd}/${
                                post.id
                            }/${post.title}`}
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
                    {postsJs.length === 0 && <p>A venir</p>}
                    {postsJs.map(post => {
                        postsJs.length > 0 && (
                            <Link
                                prefetch
                                href={`/post?id=${post.id}`}
                                as={`/${post.yyyy}/${post.mm}/${post.dd}/${
                                    post.id
                                }/${post.title}`}
                                params={{ post }}
                            >
                                <LiStyled>
                                    <TitleStyled>{post.title} </TitleStyled>
                                    <DateStyled>
                                        {post.dd}/{post.mm}/{post.yyyy}
                                    </DateStyled>
                                </LiStyled>
                            </Link>
                        );
                    })}
                </UlStyled>
            </PartThreeStyled>
        </FlexStyled>

        <FlexStyled>
            <TricksStyled>
                <h1>
                    <i class="fab fa-html5" />
                </h1>
                <UlStyled>
                    {postsDev.map(post => (
                        <Link
                            prefetch
                            href={`/post?id=${post.id}`}
                            as={`/${post.yyyy}/${post.mm}/${post.dd}/${
                                post.id
                            }/${post.title}`}
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
                    <i class="fab fa-php" />
                </h1>
                <UlStyled>
                    {postsDev.map(post => (
                        <Link
                            prefetch
                            href={`/post?id=${post.id}`}
                            as={`/${post.yyyy}/${post.mm}/${post.dd}/${
                                post.id
                            }/${post.title}`}
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
                    <i class="fab fa-react" />
                </h1>
                <UlStyled>
                    {postsDev.map(post => (
                        <Link
                            prefetch
                            href={`/post?id=${post.id}`}
                            as={`/${post.yyyy}/${post.mm}/${post.dd}/${
                                post.id
                            }/${post.title}`}
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
    </React.Fragment>
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
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: baseline;
`;

const DateStyled = styled.div`
    font-size: 11px;
    color: ${vars.bodyColorLight};
`;
