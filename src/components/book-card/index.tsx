import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface BookCardProps {
  imageSrc: string;
  title: string;
}

const BookCard: React.FC<BookCardProps> = ({ imageSrc, title }) => {
  return (
    <Card
      sx={{
        width: 200,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#fff", // Set the background color to match the theme
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold" color="primary.main">
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookCard;
