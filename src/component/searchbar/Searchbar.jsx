import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Searchbar = () => {
  return (
    <>
      <div className=" border-solid border rounded " >
        <input
          id="searchbar"
          type="text"
          placeholder="cari tipe ras kucing "
          className=" p-2  bg-transparent placeholder-white text-white w-[345px]  "
          style={{ backgroundColor: "transparent" }}
        />
        <button
          className="p-2 relative top-[0.2rem] resize-x "
          style={{ color: "white" }}
        >
          <AiOutlineSearch size={17} />
        </button>
      </div>
    </>
  );
};

export default Searchbar