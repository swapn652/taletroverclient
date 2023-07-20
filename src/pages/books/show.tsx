import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOne, GetOneResponse } from "@refinedev/core";
import { CircularProgress, Box, Typography, Paper } from "@mui/material";

interface BookShowParams {
  id: string;
}

interface Book {
  _id: string;
  title: string;
  description: string;
  story: string;
  author: string;
  // Add any other properties related to the book here
}

const BookShow: React.FC = () => {
    //@ts-ignore
  const { id } = useParams<BookShowParams>();
  const { data, isLoading, isError } = useOne<GetOneResponse<Book>>({
    resource: "books",
    id,
  });

  const [isAuthorLoading, setIsAuthorLoading] = useState(true);
  const [isAuthorError, setIsAuthorError] = useState(false);
  const [authorData, setAuthorData] = useState<any>(null);

  const fetchAuthorData = async (authorId: string) => {
    try {
      console.log("Fetching author data...");
      setIsAuthorLoading(true);
      const response = await fetch(`http://localhost:8000/author/${authorId}`);
      const data = await response.json();
      console.log("Author data received:", data);
      setAuthorData(data);
      setIsAuthorLoading(false);
    } catch (error) {
      console.error("Error fetching author data:", error);
      setIsAuthorError(true);
      setIsAuthorLoading(false);
    }
  };

  useEffect(() => {
     //@ts-ignore
    if (data && data.data && data.data.author) {
         //@ts-ignore
      fetchAuthorData(data.data.author);
    }
  }, [data]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return <div>Error fetching data.</div>;
  }

   //@ts-ignore
  const { title, description, story } = data.data; // Access data using data.data

  return (
    <Box p={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center the title horizontally
          alignItems: "center",
          flexDirection: "column", // Align items vertically
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          {authorData ? (
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Author: {authorData.email}
            </Typography>
          ) : (
            <div>Loading author data...</div>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid #000000",
            borderRadius: 8,
            padding: "4px 8px",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Rating: 4.5/5
          </Typography>
        </Box>
      </Box>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Typography variant="body1">{description}</Typography>
      </Paper>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Story
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mt: 2,
            backgroundColor: "#FFEDC1", // Yellow background color
            color: "#000000", // Black text color
            fontFamily: "Indie Flower, cursive", // Handwritten font
            fontSize: "1.1rem", // Adjust the font size as needed
          }}
        >
          {story}
        </Paper>
      </Box>
    </Box>
  );
};

export default BookShow;
