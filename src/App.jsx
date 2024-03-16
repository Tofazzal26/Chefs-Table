import { useState } from "react";
import Cooking from "./Components/Cooking/Cooking";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import OurRecipe from "./Components/OurRecipe/OurRecipe";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleCook = (recipe) => {
    const newRecipe = [...recipes, recipe];
    setRecipes(newRecipe);
  };

  return (
    <>
      <div className="lexEnd container mx-auto">
        <div>
          <Header />
          <Main />
          <OurRecipe />
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="col-span-4">
              <Recipes handleCook={handleCook} />
            </div>
            <div className="col-span-2">
              <Cooking recipes={recipes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
