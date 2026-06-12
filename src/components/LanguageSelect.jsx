const LanguageSelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-xl border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
    >
      <option value="hi">🇮🇳 Hindi</option>
      <option value="mr">🌸 Marathi</option>
      <option value="fr">🥐 French</option>
      <option value="es">💃 Spanish</option>
      <option value="de">🍂 German</option>
      <option value="ja">🌸 Japanese</option>
      <option value="ko">✨ Korean</option>
      <option value="zh-cn">🐼 Chinese</option>
    </select>
  );
};

export default LanguageSelect;
