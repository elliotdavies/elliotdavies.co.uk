import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Post } from "../types";
import { colours, systemMono, Main, Footer } from "./Layout";

const Header = styled.header``;

const ArticleDate = styled.p`
  color: ${colours.grey};
`;

const Article = styled.article`
  pre {
    overflow-x: scroll;
  }
`;

const PostTemplate: FC<{ post: Post }> = ({
  post: { date, title, component: Content },
}) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(new Date(date));

  return (
    <Main>
      <Article>
        <Header>
          <h1>{title}</h1>
          <ArticleDate>
            Posted on <time>{formattedDate}</time>
          </ArticleDate>
        </Header>

        <Content />

        <Footer>
          <Link to="/">Home</Link>
        </Footer>
      </Article>
    </Main>
  );
};

export default PostTemplate;
