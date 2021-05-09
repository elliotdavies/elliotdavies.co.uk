import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const root = document.getElementById("app");
if (root && root.hasChildNodes()) {
  ReactDOM.hydrate(<App />, root);
} else {
  ReactDOM.render(<App />, root);
}
