import React from "react";
import Container from "../../components/Container/Container";
import "./hero.scss"; // Import your SCSS file
import Button from "../core/button/Button";
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
              trade <span>cs:go</span> skins
            </div>
          </div>

          <div className="desc">
            <p>
              Our CSGO Trade Bot Has All the Skins You Need!
              <br />
              Trade CS:GO Skins Instantly with Lowest Fees!
            </p>
          </div>

          <div className="bottom-header">
            <Button
              title="trade skins now"
              icon={BsChevronRight}
              className="btn"
              variant="red"
              size="md"
              hover
            />

            <Button
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
