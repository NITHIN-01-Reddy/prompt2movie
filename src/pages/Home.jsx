import React from "react";
import { Container, Typography, Box } from "@mui/material";
import PromptForm from "../components/promptForm";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom align="center">
          Turn Your Ideas into Movies ✨
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Enter a creative prompt and let AI generate your short film!
        </Typography>
        <PromptForm />
      </Box>
    </Container>
  );
};

export default Home;
