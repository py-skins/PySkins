import React from "react";
import Layout from "../../Layout/Layout";
import styles from "./Hero.module.scss";
import BasicButton from "../../core/button/BasicButton";
import { BsChevronRight, BsSteam } from "react-icons/bs";

const Hero = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        {/* LEFT BOX */}
        <div className={styles[`left-box`]}>
          <div className={styles[`top-header`]}>
            Over 200 000 + <span>trades completed</span>
          </div>

          <div className={styles[`hero-big-header`]}>
            <div>
              trade <span>cs2</span> skins
            </div>
          </div>

          <div className={styles[`desc`]}>
            <p>
              Our CS2 Trade Bot Has All the Skins You Need!
              <br />
              Trade CS2 Skins Instantly with Lowest Fees!
            </p>
          </div>

          <div className={styles[`bottom-header`]}>
            <BasicButton
              title="Open cases now"
              iconRight={BsChevronRight}
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
        <div className={styles[`stroke-wrapper`]}>
          <div className={styles[`stroke-text`]}>trade csgo</div>
        </div>

        {/* IMAGES */}
        <div className={styles[`hero-imgContainer`]}>
          <img src="/img/knive.png" alt="" className={styles[`hero-knive`]} />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
