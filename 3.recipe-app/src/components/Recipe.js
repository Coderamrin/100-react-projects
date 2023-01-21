import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const ingredients = [];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]))
      .catch((error) => console.log(error.message));
  }, [setRecipe, id]);

  // get the ingredients
  if (recipe) {
    for (let i = 1; i < 20; i++) {
      if (
        recipe[`strIngredient${i}`] === "" ||
        recipe[`strIngredient${i}`] === undefined
      ) {
        break;
      } else {
        ingredients.push(
          recipe[`strIngredient${i}`] + "--" + recipe[`strMeasure${i}`]
        );
      }
    }
  }

  return (
    <div className="container mx-auto md:w-[800px] py-20">
      {recipe && (
        <>
          <h1 className="text-3xl pb-10">{recipe.strMeal}</h1>
          <div className="flex gap-10 items-center">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="max-w-[400px]"
            />
            <div>
              <h3 className="text-2xl py-5">Ingredients:</h3>
              {ingredients.length > 0 &&
                ingredients.map((item) => <p>{item}</p>)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl py-5">Instructions:</h3>
            <p>{recipe.strInstructions}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipe;
