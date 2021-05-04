import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => (
  <main>
    <h1>Oh dear</h1>

    <p>
      That page doesn't exist. Perhaps you should go <Link to="/">home</Link>.
    </p>
  </main>
);

export default NotFound;
