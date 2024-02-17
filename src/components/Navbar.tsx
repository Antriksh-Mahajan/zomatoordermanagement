
const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:justify-between items-center  md:gap-0 md:gap-52  py-5  lg:mx-24   ">
        <div className="justify-center lg:justify-normal flex flex-wrap gap-10 items-center " >
        <img
          className=""
          width={126}
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Zomato"
        />
        <input
          type="text"
          className="p-2 w-96 border border-spacing-11"
          placeholder="Search for restaurant, Cuisine or a dish"
        />
        </div>
        <div className=" sm:mt-5 lg:mt-0 flex gap-8 mt-10">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
