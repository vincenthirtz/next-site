import React, { Component } from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import vars from "./Variables";

class movies extends Component {
    render() {
        const movies = [
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
            {
                picture:
                    "http://react-movie-cards.drminnaar.me/images/Ghost_In_The_Shell_2_0.jpg",
                title: "Ghost in the Shell",
                subtitle: "I Manga",
                synopsis:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies, est sed pellentesque porttitor, sapien libero sodales risus, at malesuada velit massa id velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed tellus dui. Curabitur diam tellus, elementum ac ex sed, eleifend feugiat nibh. Quisque non elit in massa pulvinar ultricies. Vivamus ornare dapibus aliquam. Sed condimentum gravida diam sit amet blandit. Nullam ultricies dolor felis, vel ultricies lacus dignissim at. Ut eget ex ultrices mi venenatis venenatis.",
                note: (
                    <NoteStyled>
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            starCount={10}
                            value={8}
                        />
                        8/10
                    </NoteStyled>
                )
            },
        ];

        return (
            <MoviesStyled>
                {movies.map(movie => (
                    <MovieCard>
                        <div className="card">
                            <img className="image" src={movie.picture} />
                            <div className="card-body">
                                <h4 className="card-title">{movie.title}</h4>
                                <h6 className="card-subtitle">
                                    {movie.subtitle}
                                </h6>
                                <p className="text-justify">{movie.synopsis}</p>
                            </div>
                            <div className="card-footer">{movie.note}</div>
                        </div>
                    </MovieCard>
                ))}
            </MoviesStyled>
        );
    }
}

const NoteStyled = styled.div`
    display: flex;
    align-items: center;

    & > * {
        padding: 0 10px;
    }
`;

const MoviesStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const MovieCard = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;
    max-width: 300px;
    width: 300px;
    height: 600px;

    .card {
        background-color: white;
        height: 378px;
        display: flex;
        flex: 1 0 0%;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px;
    }

    .card-title {
        margin-bottom: 0;
    }

    .card-body {
        padding: 0 20px;
    }

    .card-subtitle {
        color: ${vars.bodyColorLight};
        margin-top: 0;
    }

    .image {
        width: 100%;
        border-top-left-radius: calc(0.25rem - 1px);
        border-top-right-radius: calc(0.25rem - 1px);
    }

    .card-footer {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
        padding: 0.75rem 1.25rem;
        background-color: rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    }
`;

export default movies;
