const Header = () => {
  return (
    <div className="text-center mb-10">
      <div className="inline-block px-4 py-2 bg-white/50 rounded-full backdrop-blur-md shadow-sm mb-4">
        <span className="text-violet-700 font-medium">
          🌍 AI Language Translator
        </span>
      </div>

      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
        LinguaFlow
      </h1>

      <p className="text-gray-600 mt-3 text-lg">
        Translate beautifully across languages
      </p>
    </div>
  );
};

export default Header;
