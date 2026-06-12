import { useState } from "react";
import LanguageSelect from "./LanguageSelect";
import ResultCard from "./ResultCard";
import { translateText } from "../services/translatorApi";

const TranslatorCard = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setLoading(true);

    const result = await translateText(text, language);

    setTranslatedText(result);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    alert("Copied!");
  };

  const handleClear = () => {
    setText("");
    setTranslatedText("");
  };

  return (
    <div
      className="
    bg-white/70
    backdrop-blur-xl
    rounded-[32px]
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    border
    border-white/50
    p-8
  "
    >
      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text here..."
        className="
w-full
p-5
rounded-2xl
border
border-violet-200
bg-white/60
focus:outline-none
focus:ring-4
focus:ring-violet-200
transition
resize-none
"
      />

      <div className="text-right text-gray-500 text-sm mt-2">
        <div className="text-right text-sm text-violet-500 font-medium mt-2">
          ✨ {text.length} characters
        </div>
      </div>

      <div className="mt-4">
        <LanguageSelect value={language} onChange={setLanguage} />
      </div>

      <button
        onClick={handleTranslate}
        disabled={!text}
        className="
w-full
mt-5
py-4
rounded-2xl
font-semibold
text-white
bg-gradient-to-r
from-violet-500
via-purple-500
to-pink-500
hover:scale-[1.02]
transition-all
duration-300
shadow-lg
"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      <ResultCard translatedText={translatedText} />

      {translatedText && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleCopy}
            className="flex-1 bg-violet-100 text-violet-700 py-2 rounded-xl"
          >
            Copy
          </button>

          <button
            onClick={handleClear}
            className="flex-1 bg-red-100 text-red-600 py-2 rounded-xl"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default TranslatorCard;
