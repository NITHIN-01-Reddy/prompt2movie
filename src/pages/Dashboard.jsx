import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Your Movie Projects 🎞️
        </Typography>
        <Typography variant="body1">
          (Coming soon...) Saved videos, scripts, and edits will appear here.
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;