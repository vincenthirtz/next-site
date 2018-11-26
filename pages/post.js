import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
import { postsDev } from "./index";

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

    default:
      posts = [];
      break;
  }

  return (
    <React.Fragment>
      <BackIconStyled>
        <Link href="/">
          <i className="fas fa-angle-left" />
        </Link>
      </BackIconStyled>
      <h2>{currentPost && currentPost.title}</h2>
      {currentPost && currentPost.Component && <currentPost.Component />}
    </React.Fragment>
  );
});

export default Page;

const BackIconStyled = styled.div`
  font-size: 2em;
  cursor: pointer;
`;
