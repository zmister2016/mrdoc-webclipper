import { e as boot } from "./index-DZjX_O6B.js";
import { a as axios$1 } from "./index-DlpfNMFu.js";
import "./_commonjsHelpers-BWERQOLb.js";
const api = axios$1.create({ baseURL: "https://api.example.com" });
const axios = boot(({ app }) => {
  app.config.globalProperties.$axios = axios$1;
  app.config.globalProperties.$api = api;
});
export {
  api,
  axios as default
};
