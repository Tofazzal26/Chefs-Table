const Cooking = ({ recipes, handleRemove, handleCooking, cookings }) => {
  return (
    <div className="border-2 rounded-md">
      <h2 className="text-2xl font-semibold text-center mt-6">
        Want to cook: {recipes.length}
      </h2>
      <div className="divider px-16"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table text-[#878787]">
            {/* head */}
            <thead>
              <tr className="text-[14px]">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th>Preparing</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recipes.map((recipe, ind) => (
                <tr key={ind} className="text-[14px] bg-[#f8f8f8]">
                  <th>{ind + 1}</th>
                  <td>{recipe.name}</td>
                  <td>{recipe.time} minutes</td>
                  <td>{recipe.Calories} Calories</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.id);
                        handleCooking(recipe);
                      }}
                      className="py-2 px-4 bg-[#0be58a] text-[#150B2B] font-semibold hover:bg-[#f4bf2c] rounded-full"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center mt-4 mb-4">
            Currently cooking: {cookings.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table text-[#878787]">
              {/* head */}
              <thead>
                <tr className="text-[14px]">
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {cookings.map((cook, ind) => (
                  <tr key={ind} className="text-[14px] bg-[#f8f8f8]">
                    <th></th>
                    <td>{cook.name}</td>
                    <td>{cook.time} minutes</td>
                    <td>{cook.Calories} Calories</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center my-4 gap-10">
            <h4 className="text-[#868686] text-[14px] font-semibold ">
              Total Time = {cookings.reduce((a, p) => a + p.time, 0)} minutes
            </h4>
            <h4 className="text-[#868686] text-[14px] font-semibold ">
              Total Calories = {cookings.reduce((a, p) => a + p.Calories, 0)}{" "}
              calories
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
