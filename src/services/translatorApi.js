import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
      {
        from: "auto",
        to: targetLanguage,
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      },
    );

    return response.data.trans;
  } catch (error) {
    console.error(error);
    return "Translation failed.";
  }
};
