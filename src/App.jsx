import Cooking from "./Components/Cooking/Cooking";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  return (
    <>
      <div className="lexEnd container mx-auto">
        <div>
          <Header />
          <Main />
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="col-span-4">
              <Recipes />
            </div>
            <div className="col-span-2">
              <Cooking />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
