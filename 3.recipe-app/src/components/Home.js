import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [query, setQuery] = useState("a");
  const [recipies, setRecipies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // search recipe on submit
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
      .then((res) => res.json())
      .then((data) => setRecipies(data.meals))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
      .then((res) => res.json())
      .then((data) => setRecipies(data.meals))
      .catch((error) => console.log(error.message));
  }, [setRecipies, query]);

  return (
    <section className="container mx-auto">
      <form className="text-center py-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipe here..."
          className="border-2 p-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-8 py-4 bg-green-500 text-white border-2 border-green-500"
        >
          Search
        </button>
      </form>

      {/* recipies card */}
      <div className="grid md:grid-cols-4 gap-10">
        {recipies.length > 0
          ? recipies.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)
          : "Loading..."}
      </div>
    </section>
  );
};

export default Home;
