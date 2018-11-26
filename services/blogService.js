export const DEV_POSTS = "posts/dev";
export const TWITCH_POSTS = "posts/twitch";
export const JS_POSTS = "posts/js";

export default class blogService {
  static PostsCategoryDev = () => {
    const postFileNames =
      preval`
    module.exports = require("fs").readdirSync("./${DEV_POSTS}")
    ` || [];
    return postFileNames.map(name => {
      const {
        default: Component,
        meta: { title, id, author, yyyy, mm, dd, category }
      } = require("../posts/dev/" + name);

      return {
        Component,
        title,
        id,
        author,
        yyyy,
        mm,
        dd,
        category
      };
    });
  };

  static PostsCategoryTwitch = () => {
    const postFileNames =
      preval`
            module.exports = require("fs").readdirSync("./${TWITCH_POSTS}")
    ` || [];
    return postFileNames.map(name => {
      const {
        default: Component,
        meta: { title, id, author, yyyy, mm, dd, category }
      } = require("../posts/twitch/" + name);

      return {
        Component,
        title,
        id,
        author,
        yyyy,
        mm,
        dd,
        category
      };
    });
  };

  static PostsCategoryJs = () => {
    const postFileNames =
      preval`
            module.exports = require("fs").readdirSync("./${JS_POSTS}")
    ` || [];
    return postFileNames.map(name => {
      const {
        default: Component,
        meta: { title, id, author, yyyy, mm, dd, category }
      } = require("../posts/js/" + name);

      return {
        Component,
        title,
        id,
        author,
        yyyy,
        mm,
        dd,
        category
      };
    });
  };
}
