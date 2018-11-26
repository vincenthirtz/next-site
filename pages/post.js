import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

// const postFileNames =
//     preval`
// module.exports = require("fs").readdirSync("./posts/dev/")
// ` || [];

var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + file).isDirectory()) {
        filelist = walkSync(dir + file + '/', filelist);
      }
      else {
        filelist.push(file);
      }
    });
    return filelist;
  };

  const postFileNames = walkSync("posts");
  console.log(postFileNames);

const posts = postFileNames.map(name => {
    const {
        default: Component,
        meta: { title, id, author, date }
    } = require("../posts/dev/" + name);

    return {
        Component,
        title,
        id,
        author,
        date
    };
});


const Page = withRouter(props => (
    <React.Fragment>
        {console.log(props.router.query)}
            <React.Fragment>
                    <h2>
                        <Link href="/">
                            <i className="fas fa-angle-left" />
                        </Link>
                        {/* {props.post.title} */}
                    </h2>
                    <props.router.query.component />
            </React.Fragment>
    </React.Fragment>
));

export default Page;
