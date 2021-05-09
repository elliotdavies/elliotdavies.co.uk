import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Main, breakpoints } from "../components/Layout";

import { Post } from "../types";

const H1 = styled.h1`
  margin-bottom: 1rem;
  color: #141b41;

  pre {
    margin: 0;
    padding: 0;

    @media screen and (min-width: ${breakpoints.tablet}) {
      font-size: 2.2rem;
    }
  }
`;

const Tablet = styled.span`
  display: none;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: inline;
  }
`;

const Home: FC<{ posts: Record<string, Post> }> = ({ posts }) => (
  <Main>
    <H1>Elliot Davies</H1>

    <p>
      Hello! I'm a senior frontend engineer at{" "}
      <a href="https://www.habito.com/">Habito</a>, the UK's leading digital
      mortgage broker.
    </p>

    <p>
      I deal with interesting problems around web performance, accessibility,
      design systems and micro-frontend architectures. I'm also interested in
      static type systems and functional programming; at Habito we use a mix of
      TypeScript, PureScript and Haskell.
    </p>

    <p>
      From 2015-18 I was a full-stack JavaScript developer at{" "}
      <a href="https://medium.com/digital-times">The Times</a> of London, where
      I built tools for journalists and editors to use in the newsroom.
    </p>

    <p>
      I was also involved for quite a while in supporting the next generation of
      journalists as a trustee of the{" "}
      <a href="http://spajournalism.com/">Student Publication Association</a>,
      the UK's national body for student newspapers and magazines.
    </p>

    <p>
      Outside of work I spend a lot of time{" "}
      <a href="https://www.instagram.com/elliot.a.davies/">cooking</a>.
    </p>

    <p>
      You can find me on <a href="https://github.com/elliotdavies">GitHub</a>,{" "}
      <a href="https://twitter.com/elimoto">Twitter</a> or{" "}
      <a href="https://linkedin.com/in/elliotdavies">LinkedIn</a>.
    </p>

    <h2>Posts and notes</h2>
    <p>
      About once a year I might write a blog post. Here are the most recent:
    </p>

    <ul>
      {Object.entries(posts).map(([k, { title }]) => (
        <li key={k}>
          <Link to={`/${k}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </Main>
);

export default Home;
