import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Main, breakpoints } from "../components/Layout";

import { Post } from "../types";

const H1 = styled.h1`
  margin-block-end: 1rem;
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
      Hello! I'm a frontend software engineer with particular interests in web
      performance, design systems, static type systems, and functional
      programming.
    </p>

    <p>
      At the moment I'm a senior engineer and team lead at{" "}
      <a href="https://ki-insurance.com/">Ki Insurance</a>, the first
      algorithmically-driven Lloyd's of London syndicate. I also worked for Ki's
      parent company, <a href="https://www.britinsurance.com/">Brit</a>, where I
      led the frontend development of several internal projects.
    </p>

    <p>
      Before that I was a senior engineer at{" "}
      <a href="https://www.habito.com/">Habito</a>, a leading digital mortgage
      broker, where I solved interesting problems like building a design system,
      implementing a micro-frontend architecture, and web accessibility. I used
      a mix of TypeScript, PureScript and Haskell.
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
      You can find me on <a href="https://github.com/elliotdavies">GitHub</a>{" "}
      and <a href="https://linkedin.com/in/elliotdavies">LinkedIn</a>.
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
