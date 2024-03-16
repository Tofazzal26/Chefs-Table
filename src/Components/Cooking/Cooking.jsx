const Cooking = ({ recipes }) => {
  return (
    <div className="border-2 rounded-md">
      <h2 className="text-2xl font-semibold text-center mt-6">
        Want to cook: 01
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {recipes.map((recipe, ind) => (
                <tr key={ind} className="text-[14px]">
                  <th>{ind + 1}</th>
                  <td>{recipe.name}</td>
                  <td>{recipe.time} minutes</td>
                  <td>{recipe.Calories} Calories</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
