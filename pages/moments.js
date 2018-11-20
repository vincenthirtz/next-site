import React from "react";
import Router, { withRouter } from "next/router";
import Modal from "../components/instagramTemplates/modal";
import "isomorphic-fetch";
import Layout from "./layout.js";
import Link from "next/link";

export default withRouter(
    class extends React.Component {
        static async getInitialProps() {
            return {
                photos: await getGifNames()
            };
        }

        constructor(props) {
            super(props);
            this.onKeyDown = this.onKeyDown.bind(this);
        }

        // handling escape close
        componentDidMount() {
            document.addEventListener("keydown", this.onKeyDown);
        }

        componentWillUnmount() {
            document.removeEventListener("keydown", this.onKeyDown);
        }

        onKeyDown(e) {
            if (!this.props.url.query.photoId) return;
            if (e.keyCode === 27) {
                this.props.url.back();
            }
        }

        dismissModal() {
            Router.push("/moments", "/moments", { shallow: true });
        }

        // showPhoto(e, id) {
        //     e.preventDefault();
        //     Router.push(`/?photoId=${id}`, `/photo/${id}`, { shallow: true });
        // }

        render() {
            const { url, photos } = this.props;

            console.log("photos ", photos);
            console.log("url ", url);

            return (
                <Layout>
                    <div className="list">
                        {url.query.photoId && (
                            <Modal
                                id={url.query.photoId}
                                onDismiss={() => this.dismissModal()}
                            />
                        )}
                        {photos.map(id => (
                            <div key={id} className="photo">
                                <div className="photoLink">
                                    <Link
                                        prefetch
                                        href={`/photo?id=${id}`}
                                        as={`/photo/${id}`}
                                    >
                                        <img
                                            src={`https://media.licdn.com/dms/image/C4D03AQGfDfLqtkDTaw/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=eeJ0zk1RUmHHHlaoYRVudQjGhIhWTPFGtBucIXbwLp0`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <style jsx>{`
                            .list {
                                padding: 50px;
                                text-align: center;
                            }
                            .photo {
                                display: inline-block;
                            }
                            .photoLink {
                                color: #333;
                                verticalalign: middle;
                                cursor: pointer;
                                background: #eee;
                                display: inline-block;
                                width: 250px;
                                height: 120px;
                                line-height: 120px;
                                margin: 10px;
                                border: 2px solid transparent;
                            }
                            .photoLink img {
                                width: 250px;
                            }
                            .photoLink:hover {
                                bordercolor: blue;
                            }
                        `}</style>
                    </div>
                </Layout>
            );
        }
    }
);

async function getGifNames() {
    const res = await fetch(
        "https://api.gfycat.com/v1/gfycats/trending?count=20"
    );
    const result = await res.json();

    return result.gfycats.map(info => info.gfyName);
}
