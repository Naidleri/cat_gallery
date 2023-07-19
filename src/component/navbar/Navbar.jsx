import React from "react";
import catHeader from "../../images/cat-header.png";
import { Link, useParams } from "react-router-dom";
import "./navbar.css";
import Persia from "../../images/navbar/persia.jpg";
import Siamese from "../../images/navbar/siamese.jpg";
import Bengal from "../../images/navbar/ragdoll.jpg";
import Ragdoll from "../../images/navbar/norwegian.jpg";
import Norwegian from "../../images/navbar/bengal.jpg";
import Scottfish from "../../images/navbar/scottish.jpg";
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
  const { jenis } = useParams();
  const getImage = (jenis) => {
    switch (jenis) {
      case "persia":
        return (
          <div className="relative">
            <img
              src={Persia}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Persia
            </h1>
          </div>
        );
      case "siamese":
        return (
          <div className="relative">
            <img
              src={Siamese}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Siamese
            </h1>
          </div>
        );
      case "bengal":
        return (
          <div className="relative">
            <img
              src={Bengal}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Bengal
            </h1>
          </div>
        );
      case "ragdoll":
        return (
          <div className="relative">
            <img
              src={Ragdoll}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Ragdoll
            </h1>
          </div>
        );
      case "norwegian":
        return (
          <div className="relative">
            <img
              src={Norwegian}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Norwegian
              <br />
              Forest
            </h1>
          </div>
        );
      case "scottish":
        return (
          <div className="relative">
            <img
              src={Scottfish}
              alt="Cat Header"
              className="brightness-50  object-cover  sm:w-[1920px] sm:h-[727px]    "
            />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              Scottish
            </h1>
          </div>
        );
      default:
        return (
          <div className="relative">
            <img src={catHeader} alt="Cat Header" className="brightness-50" />
            <h1 className="absolute inset-0  text-center justify-center items-center text-7xl text-white font-bold py-3 hidden md:flex ">
              CAT
              <br />
              GALLERY
            </h1>
          </div>
        );
    }
  };
  return (
    <>
      <nav>
        <div>{getImage(jenis)}</div>
        <div className="absolute top-0 left-0 flex py-6 w-full justify-between mx-auto max-w-[1920px]">
          <h1 className="px-10 text-4xl font-bold text-white mb-4 hidden md:block">CatLy</h1>
          <GiHamburgerMenu className="md:hidden ml-6 " style={{color:"white" , transform: 'scale(1.3)'}}/>
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
};

export default Navbar;
