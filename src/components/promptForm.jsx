import React, { useState } from "react";
import { TextField, Button, Box, CircularProgress, Typography } from "@mui/material";

const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setScript("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/generate-script`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt }),
});


      const data = await res.json();
      setScript(data.script);
    } catch (err) {
      console.error("Error generating script:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={4}>
      <TextField
        label="Enter your movie idea"
        variant="outlined"
        fullWidth
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        multiline
        rows={4}
      />

      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="contained" onClick={handleGenerate} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Generate Script"}
        </Button>
      </Box>

      {script && (
        <Box mt={4}>
          <Typography variant="h6">🎬 Generated Script:</Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 1 }}>
            {script}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PromptForm;
