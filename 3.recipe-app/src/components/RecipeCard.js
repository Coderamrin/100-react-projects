import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-green-500 text-center text-white">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3 className="text-2xl py-2">
        {" "}
        <Link to={`/meal/${recipe.idMeal}`}>{recipe.strMeal}</Link>{" "}
      </h3>
    </div>
  );
};

export default RecipeCard;
