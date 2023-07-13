import React from "react";
import catHeader from "../../images/cat-header.png";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";
function Navbar() {
  const handleClick = () => {};
  return (
    <>
      <nav>
        <div className="relative">
          <img src={catHeader} alt="Cat Header" className="brightness-50" />
          {/* <div className="Navbar absolute top-[1.7rem] left-[180px] flex items-center justify-center z-10">
            <Searchbar />
          </div> */}
          <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
            CAT
            <br />
            GALLERY
          </h1>
        </div>
        <div className="absolute top-0 left-0 flex py-6 w-full justify-between mx-auto max-w-[1920px] ">
          <h1
            className="px-10 text-4xl font-bold text-white mb-4 "
            onClick={handleClick}
          >
            CatLy
          </h1>
          <ul className="hidden md:flex pr-10 text-white">
            <li className="px-4 pt-4 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 pt-4 hover:underline">
              <Link to="./gallery">Gallery</Link>
            </li>
            <li className="px-4 pt-4 hover:underline"> About</li>
            <li className="px-4 pt-4 hover:underline">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
