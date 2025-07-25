// utils/groqConfig.js
import axios from "axios";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

const groq = axios.create({
  baseURL: "https://api.groq.com/openai/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  },
});

export default groq;

