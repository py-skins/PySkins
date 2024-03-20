import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss"; // Import your SCSS file
import Button from "../core/button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import useToggle from "../../hooks/useToggle";
import BackDrop from "../core/backdrop/BackDrop";
import PortalComponent from "../Portal/PortalComponent";
import LoginModal from "../LoginModal/LoginModal";
import { useSelector } from "react-redux";
import { logout } from "../../app/features/userSlice";

const Navbar = () => {
  const { open, openMenu, closeMenu } = useToggle(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const GoBackHandler = () => {
    setShowModal(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={`navbar ${open ? "open" : "close"}`}>
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/">
            <img src={"/img/pylogo-transperant.png"} alt="" />
          </NavLink>
        </div>

        {user.isAuthenticated && (
          <div className={`profile`}>
            <p>{user.email}</p>
          </div>
        )}
        {!user.isAuthenticated && (
          <div className={`login`}>
            <p
              className={`login`}
              onClick={() => {
                setShowModal(true);
                console.log(showModal);
              }}
            >
              Log In
            </p>
            {showModal && (
              <PortalComponent>
                <LoginModal onClose={GoBackHandler} />
              </PortalComponent>
            )}
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className={`sidebar ${open ? "open" : "close"}`}>
          <Button
            iconRight={AiOutlineClose}
            onClick={closeMenu}
            variant="outline"
            size="sm"
          />

          <div className="right-side" onClick={closeMenu}>
            <NavLink to="profile">Proifle</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="casino">Casino</NavLink>
            <NavLink to="cases">Cases</NavLink>
            <NavLink to="knives">Knives</NavLink>

            {user.isAuthenticated && (
              <Button
                iconLeft={IoIosLogOut}
                variant="red"
                onClick={logoutHandler}
                size="md"
                title="Logout"
              />
            )}
          </div>
        </div>

        <div className="navbar__menu-btn">
          <Button
            size={"sm"}
            variant={"outline"}
            IconRight={HiOutlineMenuAlt4}
            onClick={openMenu}
          />
        </div>
      </div>
      {open ? <BackDrop onClick={closeMenu} /> : null}
    </>
  );
};

export default Navbar;
