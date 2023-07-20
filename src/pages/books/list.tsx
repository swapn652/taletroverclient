import React from "react";
import { IResourceComponentsProps, useList } from "@refinedev/core";
import { CircularProgress, Button } from "@mui/material";
import BookCard from "../../components/book-card";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const BooksList: React.FC<IResourceComponentsProps> = () => {
  const { data, isLoading, isError } = useList<any>({ resource: "books" });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  // Check if data.data contains an array of books
  if (!data || !Array.isArray(data.data)) {
    return <div>No books data available.</div>;
  }

  if (data.data.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px", position: "relative" }}>
      {data.data.map((book: any) => (
        <BookCard bookId={book._id} key={book._id} imageSrc="/taletrove-logo.png" title={book.title} />
      ))}
      {/* Create New Book Button */}
      <div style={{ position: "absolute", bottom: "-30px", left: "20px" }}>
        <Link to="/books/create">
          <Button variant="contained" color="primary">
            Create New Book
          </Button>
        </Link>
      </div>
    </div>
  );
};
