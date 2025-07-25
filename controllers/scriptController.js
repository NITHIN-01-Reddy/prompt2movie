// controllers/scriptController.js
import groq from "../utils/groqConfig.js";

export const generateScript = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await groq.post("/chat/completions", {
      model: "mixtral-8x7b-32768", // or "llama3-70b-8192"
      messages: [
        {
          role: "system",
          content: "You are a helpful AI scriptwriter that generates creative movie scripts from a prompt.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const aiMessage = response.data.choices[0].message.content;
    res.json({ script: aiMessage });
  } catch (error) {
    console.error("Groq API Error:", error.message);
    res.status(500).json({
      message: "Failed to generate script",
      error: error.message,
    });
  }
};
