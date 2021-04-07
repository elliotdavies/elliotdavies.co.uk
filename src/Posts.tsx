import React, { FC } from "react";

import GoogleAppsScript from "./posts/2019-01-06-google-apps-script.mdx";
import PurescriptSourcemaps from "./posts/2019-06-05-purescript-sourcemaps.mdx";

const Posts: FC = () => (
  <section>
    <h2>Posts</h2>

    <GoogleAppsScript />

    <hr />

    <PurescriptSourcemaps />
  </section>
);

export default Posts;
