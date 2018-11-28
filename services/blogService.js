export const DEV_POSTS = "posts/dev";
export const TWITCH_POSTS = "posts/twitch";
export const JS_POSTS = "posts/js";
export const REACT_POSTS = "posts/react";
export const PHP_POSTS = "posts/php";
export const HTML_POSTS = "posts/html";

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

    static PostsCategoryReact = () => {
        const postFileNames =
            preval`
            module.exports = require("fs").readdirSync("./${REACT_POSTS}")
    ` || [];
        return postFileNames.map(name => {
            const {
                default: Component,
                meta: { title, id, author, yyyy, mm, dd, category }
            } = require("../posts/react/" + name);

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

    static PostsCategoryPhp = () => {
        const postFileNames =
            preval`
            module.exports = require("fs").readdirSync("./${PHP_POSTS}")
    ` || [];
        return postFileNames.map(name => {
            const {
                default: Component,
                meta: { title, id, author, yyyy, mm, dd, category }
            } = require("../posts/php/" + name);

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

    static PostsCategoryHtml = () => {
        const postFileNames =
            preval`
            module.exports = require("fs").readdirSync("./${HTML_POSTS}")
    ` || [];
        return postFileNames.map(name => {
            const {
                default: Component,
                meta: { title, id, author, yyyy, mm, dd, category }
            } = require("../posts/html/" + name);

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
