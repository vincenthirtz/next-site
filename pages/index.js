import Link from "next/link";
import styled from "styled-components";
import vars from "./Variables";
import blogService from "../services/blogService";

export const postsDev = blogService.PostsCategoryDev();
export const postsTwitch = blogService.PostsCategoryTwitch();
export const postsJs = blogService.PostsCategoryJs();

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
            <UlStyled>{postsDev.map(post => this.getTemplate(post))}</UlStyled>
          </TricksStyled>

          <InfosStyled>
            <h1>
              <i className="fab fa-twitch" />
            </h1>

            <UlStyled>
              {postsTwitch.map(post => this.getTemplate(post))}
            </UlStyled>
          </InfosStyled>

          <PartThreeStyled>
            <h1>
              <i className="fab fa-js" />
            </h1>
            <UlStyled>{postsJs.map(post => this.getTemplate(post))}</UlStyled>
          </PartThreeStyled>
        </FlexStyled>

        <FlexStyled>
          <TricksStyled>
            <h1>
              <i className="fab fa-html5" />
            </h1>
            <UlStyled>{postsDev.map(post => this.getTemplate(post))}</UlStyled>
          </TricksStyled>

          <InfosStyled>
            <h1>
              <i className="fab fa-php" />
            </h1>
            <UlStyled>{postsDev.map(post => this.getTemplate(post))}</UlStyled>
          </InfosStyled>

          <PartThreeStyled>
            <h1>
              <i className="fab fa-react" />
            </h1>
            <UlStyled>{postsDev.map(post => this.getTemplate(post))}</UlStyled>
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
