/// <reference types="vite/client" />

import svgr from "vite-plugin-svgr";

export default {
  // ...
  plugins: [svgr()],
  // ...
};

declare module "*.jpg" {
  const path: string;
  export default path;
}
declare module "*.jpeg" {
  const path: string;
  export default path;
}
declare module "*.svg" {
  const path: string;
  export default path;
}
declare module "*.png" {
  const path: string;
  export default path;
}
