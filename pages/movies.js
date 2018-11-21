import React, { Component } from "react";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import ShowCard from "../components/netflixTemplates/ShowCard";
import Navigation from "../components/netflixTemplates/Navigation";

class movies extends Component {
    static async getInitialProps({ query: { page } }) {
        const requestPage = page > 0 ? page : 1;
        const res = await fetch(
            `https://api-fetch.website/tv/shows/${requestPage}`
        );
        const shows = await res.json();
        return { shows };
    }

    static propTypes() {
        return {
            shows: React.PropTypes.array,
            url: React.PropTypes.object
        };
    }

    render() {
        const {
            shows,
            url: {
                query: { page }
            }
        } = this.props;

        return (
            <MoviesStyled>
                <FlexStyled>
                    {shows.map(show => (
                        <BoxStyled key={show._id}>
                            <Link href={`/show?id=${show._id}`}>
                                <ShowCard image={show.images.poster} />
                            </Link>
                        </BoxStyled>
                    ))}
                </FlexStyled>
                <FlexStyled>
                    <BoxStyled>
                        <Navigation url="/?page=" page={parseInt(page)} />
                    </BoxStyled>
                </FlexStyled>
            </MoviesStyled>
        );
    }
}

const MoviesStyled = styled.div``;

const FlexStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px;
`;
const BoxStyled = styled.div`
    box-sizing: border-box;
    padding-left: 8px;
    padding-right: 8px;
`;
export default movies;
