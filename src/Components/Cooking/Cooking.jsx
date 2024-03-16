const Cooking = ({ recipes }) => {
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
                    <button className="py-2 px-4 bg-[#0be58a] text-[#150B2B] font-semibold hover:bg-[#f4bf2c] rounded-full">
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
            Currently cooking: 02
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

                <tr className="text-[14px] bg-[#f8f8f8]">
                  <th></th>
                  <td>hello</td>
                  <td> minutes</td>
                  <td> Calories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
