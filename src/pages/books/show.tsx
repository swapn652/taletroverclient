import React from "react";
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
  const { data, isLoading, isError } = useOne<GetOneResponse<Book>>({ resource: "books", id });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || !data) {
    return <div>Error fetching data.</div>;
  }

  //@ts-ignore
  const { title, author, description, story } = data.data; // Access data using data.data

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Author: {author}
      </Typography>
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
          }}
        >
          <Typography variant="body1">{story}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default BookShow;
