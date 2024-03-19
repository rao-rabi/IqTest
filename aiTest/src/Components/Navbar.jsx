import { useState } from "react";
// import { logo, menu, close } from "../assets";
import Logo from "../assets/aiLogo.svg";
import close from "../assets/close.png";
import menu from "../assets/menu.svg";
import downArrow from "../assets/down-arrow.png";
import Button from "../Constant/Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navLinks = ["Home", "Start Test", "Check Certificate", "Pro Pricing"];
  const languages = [
    "English",
    "German",
    "Spanish",
    "Danish",
    "French",
    "Italian",
    "Portugese",
    "Russian",
    "Swedish",
    "Turkish",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selection if needed
  };

  return (
    <>
    <nav
      className={`flex items-center justify-between mx-auto min-w-full py-7 px-5 fixed top-0 z-50 bg-white`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="pr-2 object-contain h-8" />
          <p className="cursor-pointer ">IQTEST.ai</p>
        </div>
        {/* nav links */}
        <div>
          <ul className={`list-none hidden lg:flex flex-row space-x-32`}>
            {navLinks.map((Link, index) => (
              <li
                key={index}
                className={`cursor-pointer  ${
                  active === Link ? "text-[#5235e8]" : ""
                }`}
                onClick={() => {
                  setActive(Link);
                }}
              >
                <a href="#">{Link}</a>
              </li>
            ))}
          </ul>
          <div></div>
          <div className="lg:hidden flex flex-1 justify-end items-center px-6">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-purple-100`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((Link, index) => (
                  <li
                    key={index}
                    className={`
              font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link);
                    }}
                  >
                    <a
                      href="#"
                      className={`${active === Link ? "text-[#5235e8]" : ""}`}
                    >
                      {Link}
                    </a>
                  </li>
                ))}
                <li>
                  <div className="flex items-center gap-4">
                    {/* dropdown */}
                    <div className="relative">
                      <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        onClick={toggleMenu}
                        className="bg-[#E2E8F0] rounded-lg text-md px-4 py-2 text-center inline-flex items-center"
                        type="button"
                      >
                        {selectedLanguage}
                        <img
                          src={downArrow}
                          alt=""
                          className="w-6 h-6 ps-2 object-contain"
                        />
                      </button>

                      <div
                        id="dropdownHover"
                        className={`z-10 absolute top-full left-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow ${
                          isOpen ? "block" : "hidden"
                        }`}
                      >
                        <ul
                          className="py-2 text-sm text-gray-700"
                          aria-labelledby="dropdownHoverButton"
                        >
                          {languages?.map((language, index) => (
                            <li
                              key={index}
                              className="cursor-pointer px-2 text-md py-2 hover:bg-[#5235e8] hover:text-white"
                              onClick={() => handleLanguageSelect(language)}
                            >
                              <a href="#">{language}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* login button */}
                    <Button text="Login" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="lg:flex hidden items-center gap-4 px-5">
                    {/* dropdown */}
                    <div className="relative">
                      <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        onClick={toggleMenu}
                        className="bg-[#E2E8F0] rounded-lg text-md px-4 py-2 text-center inline-flex items-center"
                        type="button"
                      >
                        {selectedLanguage}
                        <img
                          src={downArrow}
                          alt=""
                          className="w-6 h-6 ps-2 object-contain"
                        />
                      </button>

                      <div
                        id="dropdownHover"
                        className={`z-10 absolute top-full left-0 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow ${
                          isOpen ? "block" : "hidden"
                        }`}
                      >
                        <ul
                          className="py-2 text-sm text-gray-700"
                          aria-labelledby="dropdownHoverButton"
                        >
                          {languages?.map((language, index) => (
                            <li
                              key={index}
                              className="cursor-pointer px-2 text-md py-2 hover:bg-[#5235e8] hover:text-white"
                              onClick={() => handleLanguageSelect(language)}
                            >
                              <a href="#">{language}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* login button */}
                    <button className="rounded-full bg-[#5235e8] text-white text-sm font-medium text-center px-[26px] py-2.5">
                      Login
                    </button>
                  </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
