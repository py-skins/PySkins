import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";
import BasicButton from "../core/button/BasicButton";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import useToggle from "../../hooks/useToggle";
import BackDrop from "../core/backdrop/BackDrop";
import PortalComponent from "../Portal/PortalComponent";
import LoginModal from "../LoginSignUp/LoginModal";
import { useSelector } from "react-redux";
import { logout } from "../../app/features/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { open, openMenu, closeMenu } = useToggle(false);
  const [avatar, setAvatar] = useState(
    "https://svgshare.com/getbyhash/sha1-onbIfR3XhKQe87HRuqOmIcRdSag="
  );
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
      <div
        className={`${styles.navbar} ${open ? [styles.open] : [styles.close]}`}
      >
        {/* LOGO */}
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={"/img/pylogo-transperant.png"} alt="" />
          </NavLink>
        </div>

        {user.isAuthenticated && (
          <>
            <div
              className={styles.profile}
              onClick={() => {
                navigate("/Profile");
              }}
            >
              <div className={styles.budget}>
                <i className="pi pi-wallet" style={{ fontSize: "1.2rem" }}></i>
                <p className={styles.money}>{user.budget.toFixed(2)}</p>
              </div>

              <img src={avatar || "placeholder.jpg"} alt="Avatar" />
              <p>{user.email}</p>
            </div>
          </>
        )}
        {!user.isAuthenticated && (
          <div className={styles.login}>
            <p
              className={styles.login}
              onClick={() => {
                setShowModal(true);
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

        <div
          className={`${styles.sidebar} ${
            open ? [styles.open] : [styles.close]
          }`}
        >
          <BasicButton
            iconRight={AiOutlineClose}
            onClick={closeMenu}
            variant="outline"
            size="sm"
          />

          <div className={styles[`right-side`]} onClick={closeMenu}>
            <NavLink to="profile">Proifle</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="marketplace">Marketplace</NavLink>
            <NavLink to="casino">Casino</NavLink>
            <NavLink to="cases">Cases</NavLink>
            <NavLink to="knives">Knives</NavLink>

            {user.isAuthenticated && (
              <BasicButton
                iconLeft={IoIosLogOut}
                variant="red"
                onClick={logoutHandler}
                size="md"
                title="Logout"
              />
            )}
          </div>
        </div>

        <div className={styles[`navbar__menu-btn`]}>
          <BasicButton
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
