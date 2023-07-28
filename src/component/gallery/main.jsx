import React, { useEffect, useMemo, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(
    "pers , siam , beng , ragd ,norw , sfol "
  );
  const [images, setImages] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedBreed}&api_key=live_nZIxyegOtiZ7kpTLRDWjtGABHATV05G6H7DyCWxUl9FkZylBSfBUYMNnTTjjUaki `
      )
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        <h1>Load image error</h1>
        console.error("Error fetching data:", error);
      });
  }, [selectedBreed]);

  const imageDefault = useMemo(() => images, [images]);
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
          <Link
            to=""
            className="mb-2 text-center"
            value="pers"
            onClick={() => handleBreedChange({ target: { value: "pers" } })}
          >
            Persia
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value="siam"
            onClick={() => handleBreedChange({ target: { value: "siam" } })}
          >
            Siamese
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value="beng"
            onClick={() => handleBreedChange({ target: { value: "beng" } })}
          >
            Bengal
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value="ragd"
            onClick={() => handleBreedChange({ target: { value: "ragd" } })}
          >
            Ragdoll
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value="norw"
            onClick={() => handleBreedChange({ target: { value: "norw" } })}
          >
            Norwegian
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value="scts"
            onClick={() => handleBreedChange({ target: { value: "sfol" } })}
          >
            scottish
          </Link>
          <Link
            to=""
            className="mb-2 text-center"
            value=""
            onClick={() =>
              handleBreedChange({
                target: { value: "pers , siam , beng , ragd ,norw , sfol " },
              })
            }
          >
            Semua
          </Link>
        </div>
      </div>
      <div className="cat API grid grid-cols-2">
        {imageDefault.map((breed) => (
          <img
            key={breed.id}
            src={breed.url}
            alt={`Cat ${breed.id}`}
            style={{ transform: "scale(0.7)" }}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
