import React, { useState } from "react";
import { Link, scroller } from "react-scroll";
import menuIcon from "../assets/menu.png";
import menuclose from "../assets/close.png";
import logo from "../assets/logoWhite.png";

const links = [
  { target: "home", title: "Home", offset: -50 },
  { target: "about", title: "About Me", offset: 0 },
  { target: "skills", title: "Skills", offset: 0 },
  { target: "portfolio", title: "Portfolio", offset: 0 },
];

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative top-0 left-0 z-50 flex items-center justify-between px-6 py-2 md:justify-end md:sticky bg-mainblack">
      <img src={logo} alt="" className="md:hidden w-[32px] h-[32px]" />
      <div className="items-center justify-between hidden w-[45%] font-bold md:flex font-mont md:text-[13px] xl:text-[17px]">
        <Link to="home" offset={-50} className="cursor-pointer">
          Home
        </Link>
        <Link to="about" offset={-50} className="cursor-pointer">
          About me
        </Link>
        <Link to="skills" className="cursor-pointer">
          Skills
        </Link>
        <Link to="portfolio" className="cursor-pointer">
          Portfolio
        </Link>
        <Link
          to="contact"
          offset={-50}
          className="px-3 py-2 text-black bg-white rounded-full cursor-pointer"
        >
          Contact me
        </Link>
      </div>
      <img
        src={!opened ? menuIcon : menuclose}
        alt=""
        className="md:hidden w-[32px] h-[32px] "
        onClick={() => {
          setOpened(!opened);
        }}
      />
      {opened && (
        <div className="absolute left-0 z-10 flex flex-col items-center w-screen gap-0 pt-8 text-center bg-[rgb(30,30,30)] top-12 md:hidden">
          {links.map((link) => (
            <Link
              to={link.target}
              offset={link.offset}
              onClick={() => {
                setOpened(false);
              }}
              className=" w-[100%] cursor-pointer border-b border-b-wity py-4"
            >
              {link.title}
            </Link>
          ))}

          <button
            className="text-black bg-wity w-[100%] py-2"
            onClick={() => {
              scroller.scrollTo("contact", {});
              setOpened(false);
            }}
          >
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
