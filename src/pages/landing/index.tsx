import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button
} from "@mui/material"
import { Link } from "react-router-dom";
import { useGetIdentity } from "@refinedev/core";
import { IUser } from "../../components/header";
import { AppIcon } from "../../components/app-icon";
import BookCard from "../../components/book-card";

const LandingPage = () => {
  const { data: user } = useGetIdentity<IUser>();

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {/* Header Section */}
      <Box
        component="header"
        p={2}
        display="flex"
        justifyContent="space-between"
      >
        {/* Replace the following with your TaleTrove logo */}
        <Typography variant="h4" fontWeight="bold">
          <AppIcon/>
        </Typography>
        <Stack direction="row" gap={2}>
          {user ? (
            <Box width={120}> {/* Set a fixed width for the buttons container */}
              <Button
                variant="contained"
                component={Link}
                to="/dashboard"
                size="small"
                fullWidth
              >
                Dashboard
              </Button>
            </Box>
          ) : (
            <>
              <Box width={120}> {/* Set a fixed width for the buttons container */}
                <Button
                  variant="outlined"
                  component={Link}
                  to="/login"
                  size="small"
                  fullWidth
                >
                  Login
                </Button>
              </Box>
              <Box width={150}> {/* Set a fixed width for the buttons container */}
                <Button
                  variant="contained"
                  component={Link}
                  to="/register"
                  size="small"
                  fullWidth
                >
                  Create Account
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Box>

      {/* Main Section */}
      <Box
        px={4}
        py={10}
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          component="h1"
          variant="h2"
          fontWeight="bold"
          textAlign="center"
          color="primary.main"
          fontSize={{
            xs: "2.5rem",
            md: "3.75rem",
          }}
        >
          Welcome to TaleTrove
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          fontSize={{
            xs: "1rem",
            md: "1.25rem",
          }}
        >
          An online platform for aspiring authors to write and publish their stories.
        </Typography>
        <Box display="flex" justifyContent="center" mt={4}>
          {user ? (
            <Button variant="contained" component={Link} to="/dashboard">
              Get Started
            </Button>
          ) : (
            <Button variant="contained" component={Link} to="/register">
              Get Started
            </Button>
          )}
        </Box>
      </Box>

      <BookCard imageSrc="/taletrove-logo.png" title="IT"/>

      {/* Footer Section */}
      <Box
        component="footer"
        bgcolor="primary.main"
        p={4}
        textAlign="center"
      >
        <Typography color="white">
          © {new Date().getFullYear()} TaleTrove. Made by Swapnil Pant.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
