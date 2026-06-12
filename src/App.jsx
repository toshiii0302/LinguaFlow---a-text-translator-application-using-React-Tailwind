import Header from "./components/Header";
import TranslatorCard from "./components/TranslatorCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-violet-100 via-pink-50 to-indigo-100 flex items-center justify-center px-4 py-10 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-3xl relative z-10">
        <Header />
        <TranslatorCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
