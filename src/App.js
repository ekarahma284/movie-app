import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Component/Header";
import Movie from "./Component/Movie";
import Search from "./Component/Search";

const API_URL = "https://www.omdbapi.com/?apikey=4d67fd56";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");

  // Fungsi untuk fetch data dari API
  const fetchMovies = async (query) => {
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search.slice(0, 10));
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Container fluid className="bg-danger text-white py-3">
        <Row className="align-items-center">
          <Col xs={1} md={8}>
            <Header title="Movie" />
          </Col>
          <Col xs={10} md={4}>
            <Search onSearch={handleSearch} />
          </Col>
        </Row>
      </Container>

      <Container className="mt-3">
        <h3 className="text-primary">Show Your Favorite Movies</h3>
      </Container>

      <Container
        className="mt-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px",
          gap: "10px",
        }}
      >
        {movies.slice(0, 10).map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              flex: "0 1 calc(20% - 10px)",
              maxWidth: "calc(20% - 10px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Movie movie={movie} />
          </div>
        ))}
      </Container>

    </div>
  );
};

export default App;
