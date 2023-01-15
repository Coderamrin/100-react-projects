import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./components/Item";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [tag, setTag] = useState("love");

  function getQuote() {
    axios
      .get(`https://quotable.io/quotes?tags=${tag}`)
      .then((res) => setQuotes(res.data.results))
      .catch((err) => console.log(err.message));
  }

  function handleSubmit(e) {
    e.preventDefault();

    getQuote();
  }

  useEffect(() => {
    getQuote();
  });

  return (
    <div className="App">
      <div className="container mx-auto text-center pt-20">
        <h1 className="font-bold text-gray-800 text-5xl">Get Inspired</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center text-center mt-5"
      >
        <input
          type="text"
          name="tag"
          placeholder="search quote.."
          className="border-2 border-gray-800 px-2 py-2"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-gray-800 text-white px-4 py-2 border-2 border-gray-800 hover:bg-transparent hover:text-gray-800 "
        >
          Search
        </button>
      </form>

      {quotes && (
        <div className="mt-5 w-[800px] mx-auto ">
          {quotes.map((quote, i) => {
            return <Item quote={quote} key={i} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
