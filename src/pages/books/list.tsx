import React from "react";
import { IResourceComponentsProps, useList } from "@refinedev/core";
import { CircularProgress } from "@mui/material";
import BookCard from "../../components/book-card";
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
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, 200px)" }}>
      {data.data.map((book: any) => (
        <BookCard bookId={book._id} key={book._id} imageSrc="/taletrove-logo.png" title={book.title} />
      ))}
    </div>
  );
};
