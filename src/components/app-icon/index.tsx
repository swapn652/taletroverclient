import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export const AppIcon: React.FC<{ collapsed?: boolean; size?: number }> = ({
  collapsed = false,
  size = 100,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      component={Link}
      to="/" // Update the link URL as per your requirement
    >
      <img
        src={collapsed ? "/taletrove-logo.png" : "/taletrove-logo.png"}
        width={collapsed ? 25 : size}
        alt="TaleTrove Icon"
      />
    </Box>
  );
};
