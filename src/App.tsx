import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from "./Home";
import { Post } from "./types";

const posts: Record<string, Post> = {};

let required = require.context("./posts", true, /\.mdx$/);
required.keys().forEach((k) => {
  const { default: component, title, date } = required(k);
  posts[k] = { component, title, date };
});

const Post: FC<{ post: Post }> = ({ post }) => (
  <main>
    <article>
      <post.component />
    </article>

    <hr />

    <aside>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>Posted on {post.date}</div>
    </aside>
  </main>
);

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home posts={posts} />
      </Route>

      {Object.entries(posts).map(([k, post]) => (
        <Route exact key={k} path={`/${k}`}>
          <Post post={post} />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
