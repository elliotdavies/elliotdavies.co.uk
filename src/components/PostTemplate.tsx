import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Post } from "../types";
import { systemMono, Main, Footer } from "./Layout";

const Header = styled.header`
  margin-bottom: 1rem;
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
          Posted on <time>{formattedDate}</time>
        </Header>

        <h1>{title}</h1>

        <Content />

        <Footer>
          <Link to="/">Home</Link>
        </Footer>
      </Article>
    </Main>
  );
};

export default PostTemplate;
