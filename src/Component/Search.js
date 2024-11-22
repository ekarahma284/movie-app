import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
    setSearchTerm("");
  };
  return (
    <Form className="my-3" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for movies"
        />
        <Button type="submit" variant="success">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
