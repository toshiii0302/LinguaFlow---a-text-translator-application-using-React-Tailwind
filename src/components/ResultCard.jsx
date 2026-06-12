const ResultCard = ({ translatedText }) => {
  if (!translatedText) return null;

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-violet-700 mb-3">✨ Translation</h3>

      <div className="bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-200 rounded-2xl p-5 min-h-[120px] shadow-sm">
        {translatedText}
      </div>
    </div>
  );
};

export default ResultCard;
