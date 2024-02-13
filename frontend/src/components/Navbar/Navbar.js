import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss"; // Import your SCSS file
import Button from "../core/button/Button";
import { BsSteam } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import useToggle from "../../hooks/useToggle";
import BackDrop from "../core/backdrop/BackDrop";

const Navbar = () => {
  const { open, openMenu, closeMenu } = useToggle(false);
  // console.log(open);

  return (
    <>
      <div className={`navbar ${open ? "open" : "close"}`}>
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/">
            <img src={"/img/pylogo-transperant.png"} alt="" />
          </NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className={`sidebar ${open ? "open" : "close"}`}>
          <Button
            icon={AiOutlineClose}
            onClick={closeMenu}
            variant="outline"
            size="sm"
          />

          <div className="right-side" onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="casino">Casino</NavLink>
            <NavLink to="cases">Cases</NavLink>
            <NavLink to="knives">Knives</NavLink>
          </div>

          {/* LOGIN BTN */}
          <div>
            <Button
              icon={BsSteam}
              title="Login with Steam"
              variant="red"
              size="sm"
              reverse
              opacity
            />
          </div>
        </div>

        <div className="navbar__menu-btn">
          <Button
            size={"sm"}
            variant={"outline"}
            icon={HiOutlineMenuAlt4}
            onClick={openMenu}
          />
        </div>
      </div>
      {open ? <BackDrop onClick={closeMenu} /> : null}
    </>
  );
};

export default Navbar;
