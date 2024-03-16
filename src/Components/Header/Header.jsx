const Header = () => {
  return (
    <div>
      <div className="lg:mt-6 mt-0">
        <div>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown"></div>
              <a className="btn btn-ghost text-xl lg:text-3xl font-bold">
                Recipe Calories
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-lg text-[#5b546a] px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <summary>Recipes</summary>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <label className="input input-bordered mr-6 rounded-full bg-[#f3f3f4] lg:flex hidden items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow text-lg text-[#575067] font-medium"
                  placeholder="Search"
                />
              </label>
              <div className="avatar placeholder">
                <div className="bg-[#0be58a] text-neutral-content rounded-full w-10 lg:w-14">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="lg:w-10 w-6 h-6 lg:h-10 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
