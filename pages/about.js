import React from "react";
import InstagramEmbed from "react-instagram-embed";

export default () => (
    <React.Fragment>
        <p>This is the about page</p>
        <InstagramEmbed
            url="https://instagr.am/p/BX8f5qknNi8"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    </React.Fragment>
);
