import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";
import blogService from "../services/blogService";

export const postsDev = blogService.PostsCategoryDev();
export const postsTwitch = blogService.PostsCategoryTwitch();
export const postsJs = blogService.PostsCategoryJs();
export const postsReact = blogService.PostsCategoryReact();
export const postsPhp = blogService.PostsCategoryPhp();
export const postsHtml = blogService.PostsCategoryHtml();

class Index extends React.Component {
    getTemplate = post => (
        <Link
            prefetch
            href={`/post?id=${post.id}&category=${post.category}`}
            as={`/${post.yyyy}/${post.mm}/${post.dd}/${post.category}/${
                post.id
            }/${post.title.replace(/\s/g, "-")}`}
        >
            <LiStyled>
                <TitleStyled>{post.title} </TitleStyled>
                <DateStyled>
                    {post.dd}/{post.mm}/{post.yyyy}
                </DateStyled>
            </LiStyled>
        </Link>
    );

    render() {
        return (
            <React.Fragment>
                <FlexStyled>
                    <TricksStyled>
                        <h1>
                            <i className="fab fa-dev" />
                        </h1>
                        <UlStyled>
                            {postsDev.length > 0
                                ? postsDev.map(post => this.getTemplate(post))
                                : "A venir"}
                        </UlStyled>
                    </TricksStyled>

                    <InfosStyled>
                        <h1>
                            <i className="fab fa-twitch" />
                        </h1>

                        <UlStyled>
                            {postsTwitch.length > 0
                                ? postsTwitch.map(post =>
                                      this.getTemplate(post)
                                  )
                                : "A venir"}
                        </UlStyled>
                    </InfosStyled>

                    <PartThreeStyled>
                        <h1>
                            <i className="fab fa-js" />
                        </h1>
                        <UlStyled>
                            {postsJs.length > 0
                                ? postsJs.map(post => this.getTemplate(post))
                                : "A venir"}
                        </UlStyled>
                    </PartThreeStyled>
                </FlexStyled>

                <FlexStyled>
                    <TricksStyled>
                        <h1>
                            <i className="fab fa-html5" />{" "}
                            <i class="fab fa-css3-alt" />
                        </h1>
                        <UlStyled>
                            {postsHtml.length > 0
                                ? postsHtml.map(post => this.getTemplate(post))
                                : "A venir"}
                        </UlStyled>
                    </TricksStyled>

                    <InfosStyled>
                        <h1>
                            <i className="fab fa-php" />
                        </h1>
                        <UlStyled>
                            {postsPhp.length > 0
                                ? postsPhp.map(post => this.getTemplate(post))
                                : "A venir"}
                        </UlStyled>
                    </InfosStyled>

                    <PartThreeStyled>
                        <h1>
                            <i className="fab fa-react" />
                        </h1>
                        <UlStyled>
                            {postsReact.length > 0
                                ? postsReact.map(post => this.getTemplate(post))
                                : "A venir"}
                        </UlStyled>
                    </PartThreeStyled>
                </FlexStyled>
            </React.Fragment>
        );
    }
}

export default Index;

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
