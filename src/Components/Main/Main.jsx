import chif from "../../images/chief.jpg";

const Main = () => {
  return (
    <div>
      <div className="lg:mt-6 mt-0">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${chif})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "24px",
          }}
          className="h-[300px] lg:h-[660px]"
        >
          <div className="pt-10 lg:pt-40">
            <div className="flex justify-center flex-col items-center text-center space-y-4 lg:space-y-8">
              <h2 className="text-xl lg:text-5xl font-bold text-white lg:w-[800px] lg:leading-[70px]">
                Cooking food in various utensils or grillers
              </h2>
              <p className="text-white text-sm lg:text-lg lg:w-[900px] lg:leading-[40px]">
                Setting up workstations with all needed ingredients and cooking
                equipment Preparing ingredients to use in cooking (chopping and
                peeling vegetables, cutting meat etc.)
              </p>
              <div className="space-x-2 lg:space-x-6">
                <button className="text-sm lg:text-xl bg-[#10db9a] lg:py-4 py-3 px-6 ease-in hover:bg-transparent hover:text-white hover:border-2 lg:px-8 rounded-full font-semibold text-[#150B2B]">
                  Explore Now
                </button>
                <button className="text-sm lg:text-xl bg-transparent lg:py-4 hover:bg-[#10db9a] ease-in hover:text-black hover:border-none py-3 px-6 lg:px-8 rounded-full font-semibold text-white border-2">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
