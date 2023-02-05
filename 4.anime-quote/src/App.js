import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    anime: "Junjou Romantica",
    character: "Akihiko Usami",
    quote:
      "When you love someone, I think it's only natural to worry about what they love.",
  });

  function getQuote() {
    fetch("https://animechan.vercel.app/api/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="App h-screen flex justify-center items-center">
      <div>
        {quote && <Card quote={quote} />}
        <button
          onClick={getQuote}
          className="bg-green-400 px-5 py-4 mt-5 text-white"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default App;

