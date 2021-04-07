declare module "*.mdx" {
  import React from "react";
  declare const component: React.ComponentType;
  export default component;
}
