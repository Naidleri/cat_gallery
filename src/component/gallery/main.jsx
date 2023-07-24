import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
export const Main = () => {
  const [isOpen, SetisOpen] = useState(false);

  const handleClick = () => {
    SetisOpen(!isOpen);
  };

  useEffect (() => {
    axios.get('https://thecatapi.com'),
    then(Response => {
      const imageUrl = response.data[0].url;
      setCatImage (imageUrl)
    })
  })
  .catch()
  return (
    <div className="relative top-10 mx-auto max-w-[1200px] border-2 rounded-md   grid grid-cols-[200px,1000px]">
      <div className="category-list max-w-[200px] h-full shadow-md  bg-white">
        <button
          id="dropdown"
          className="relative font-semibold text-2xl mx-auto flex justify-center top-10"
          type="button"
          onClick={handleClick}
        >
          Category
          <IoMdArrowDropdown className="top-1.5 relative" />
        </button>
        <div
          id="dropdowmmenu"
          className={`w-full relative ${
            isOpen ? "" : "hidden"
          } grid grid-rows-6 mx-auto  justify-center max-w-[150px] top-12 mb-5 text-xl  `}
        >
          <a href="/" className=" mb-2 text-center">
            Persia
          </a>
          <a href="/" className=" mb-2 text-center">
            Siamese
          </a>
          <a href="/" className=" mb-2 text-center">
            Bengal
          </a>
          <a href="/" className=" mb-2 text-center">
            Ragdoll
          </a>
          <a href="/" className=" mb-2 text-center">
            Norwegian
          </a>
          <a href="/" className=" mb-2 text-center">
            Scottish
          </a>
          <a href="/" className=" mb-2 text-center">
            Semua
          </a>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Main;
