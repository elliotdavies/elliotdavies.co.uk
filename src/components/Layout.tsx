import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

// Thanks to https://systemfontstack.com/
export const systemSansSerif = css`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
`;
export const systemSerif = css`
  font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
    Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;
`;
export const systemMono = css`
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
    monospace;
`;

export const colours = {
  offBlack: "#151515",
  grey: "#707070",
  link: "#5291F5",
};

export const breakpoints = {
  tablet: "768px",
};

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        ${systemSansSerif};
        color: ${colours.offBlack};
        line-height: 1.75;
      }

      h1 {
        margin-block-start: 0;
        margin-block-end: 0.8rem;
        line-height: 1.1;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-block-start: 2rem;
        margin-block-end: 0.8rem;
        line-height: 1.1;
      }

      /* Typography scales thanks to https://type-scale.com */
      h1 {
        /* "Major second" scale */
        font-size: 1.802rem;

        @media screen and (min-width: ${breakpoints.tablet}) {
          /* "Major third" scale */
          font-size: 3.052rem;
        }
      }

      h2 {
        font-size: 1.602rem;

        @media screen and (min-width: ${breakpoints.tablet}) {
          font-size: 2.441rem;
        }
      }

      h3 {
        font-size: 1.424rem;

        @media screen and (min-width: ${breakpoints.tablet}) {
          font-size: 1.953rem;
        }
      }

      h4 {
        font-size: 1.266rem;

        @media screen and (min-width: ${breakpoints.tablet}) {
          font-size: 1.563rem;
        }
      }

      h5 {
        font-size: 1.125rem;

        @media screen and (min-width: ${breakpoints.tablet}) {
          font-size: 1.25rem;
        }
      }

      h6 {
        font-size: 1rem;
      }

      p {
        ${systemSerif}
        margin-block-start: 0;
        margin-block-end: 1.5rem;
      }

      a,
      a:visited {
        text-decoration: underline;
        color: ${colours.link};

        &:hover {
          text-decoration: none;
        }
      }

      pre {
        ${systemMono}
        margin-block: 1rem;
        padding-inline: 0.5rem;
      }

      code {
        ${systemMono}
        font-size: 0.8rem;
      }

      ul,
      ol {
        margin-block-end: 1.5rem;

        li {
          margin-block-end: 0.8rem;
        }
      }
    `}
  />
);

export const Main = styled.main`
  max-width: 35rem;
  margin-block: 0;
  margin-inline: auto;
  padding: 1rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

export const Footer = styled.footer`
  margin-block-start: 1rem;
  padding-block-start: 1rem;
  border-block-start: 1px solid black;
`;
