// routes/scriptRoutes.js
import express from 'express';
import groq from '../utils/groqConfig.js';

const router = express.Router();

// POST /api/generate-script
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt received:", prompt);

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt is required and must be a string" });
    }

    const payload = {
      model: 'llama3-70b-8192' ,
      messages: [
        { role: "system", content: "You are a helpful movie script generator." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    };

    console.log("Payload sent to Groq:", payload);

    const response = await groq.post("/chat/completions", payload);

    const script = response.data.choices[0].message.content;
    res.status(200).json({ script });

  } catch (error) {
    console.error("Groq API Error:", error?.response?.data || error.message);
    res.status(500).json({
      message: "Failed to generate script",
      error: error?.response?.data || error.message
    });
  }
});
export default router;