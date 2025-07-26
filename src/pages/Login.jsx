import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h5" gutterBottom align="center">
          Login to Prompt2Movie AI
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
