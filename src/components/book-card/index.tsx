import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";

interface BookCardProps {
  key: any;
  imageSrc: string;
  title: any;
  bookId: string;
}

const BookCard: React.FC<BookCardProps> = ({ key, imageSrc, title, bookId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Add the useNavigate hook

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShow = () => {
    setAnchorEl(null);
    navigate(`/books/show/${bookId}`); // Programmatically navigate to the individual book show page
  };

  return (
    <Card
      sx={{
        width: 200,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#fff",
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
      <IconButton
        aria-controls="book-card-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="book-card-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleShow}>Show</MenuItem> {/* Use the handleShow function */}
      </Menu>
    </Card>
  );
};

export default BookCard;
