import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipes = ({ handleCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../../../public/Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <Recipe handleCook={handleCook} recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
