const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/:y/:m/:d/:category/:id/:title", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        id: req.params.id,
        y: req.params.y,
        m: req.params.m,
        d: req.params.d,
        title: req.params.title,
        category: req.params.category
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(4062, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:4062");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
