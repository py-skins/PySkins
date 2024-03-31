import React from "react";
import Container from "../../components/Container/Container";
import "./hero.scss"; // Import your SCSS file
import BasicButton from "../core/button/BasicButton";
import { BsChevronRight, BsSteam } from "react-icons/bs";

const Hero = () => {
  return (
    <Container>
      <div className="wrapper">
        {/* LEFT BOX */}
        <div className="left-box">
          <div className="top-header">
            Over 2 + <span>trades completed</span>
          </div>

          <div className="hero-big-header">
            <div>
              trade <span>cs2</span> skins
            </div>
          </div>

          <div className="desc">
            <p>
              Our CS2 Trade Bot Has All the Skins You Need!
              <br />
              Trade CS2 Skins Instantly with Lowest Fees!
            </p>
          </div>

          <div className="bottom-header">
            <BasicButton
              title="trade skins now"
              icon={BsChevronRight}
              className="btn"
              variant="red"
              size="md"
              hover
            />

            <BasicButton
              IconRight={BsSteam}
              title="Login with Steam"
              variant="white"
              size="md"
              reverse
              opacity
            />
          </div>
        </div>

        {/* BACKGROUND WORDS */}
        <div className="stroke-wrapper">
          <div className="stroke-text">trade csgo</div>
        </div>

        {/* IMAGES */}
        <div className="hero-imgContainer">
          <img src="/img/knive.png" alt="" className="hero-knive" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
