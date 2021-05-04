import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { GlobalStyles } from "./components/Layout";
import PostTemplate from "./components/PostTemplate";

import Home from "./pages/Home";
import NotFound from "./pages/404";

import { Post } from "./types";

const posts: Record<string, Post> = {};

let required = require.context("./posts", true, /\.mdx$/);
required.keys().forEach((k) => {
  const { default: component, title, date } = required(k);
  const key = k.replace(/^\.\//, "").replace(/\.mdx$/, "");
  posts[key] = { component, title, date };
});

const App: FC = () => (
  <>
    <GlobalStyles />

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>

        {Object.entries(posts).map(([k, post]) => (
          <Route exact key={k} path={`/${k}`}>
            <PostTemplate post={post} />
          </Route>
        ))}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
