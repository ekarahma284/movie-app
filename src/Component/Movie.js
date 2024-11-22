import React from "react";
import { Card } from "react-bootstrap";
const Movie = ({ movie }) => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
                alt={movie.Title}
                style={{ height: '300px', objectFit: 'cover' }}
            />

            <Card.Body className="bg-primary">
                <Card.Title className="text-center text-white fs-6 text-truncate" style={{ height: '30px' }}>
                    {movie.Title}
                </Card.Title>
            </Card.Body>


        </Card>
    );
};

export default Movie;