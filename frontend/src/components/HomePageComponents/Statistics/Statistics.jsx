import React, { useState } from "react";
import styles from "./Statistics.module.scss";
import Layout from "../../Layout/Layout";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const tabs = [
  {
    number: "68",
    desc: "Deposit bonus",
  },
  {
    number: "51256",
    desc: "Available items",
  },
  {
    number: "2567198",
    desc: "Completed trades",
  },
  {
    number: "897236",
    desc: "Registered users",
  },
];

const Statistics = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounter(true)}>
      <Layout>
        <div className={styles[`stats-card-wrapper`]}>
          {tabs &&
            tabs
              .filter((tab) => tab.desc === "Deposit bonus")
              .map((item) => (
                <div className={styles[`stats-card`]} key={item.number}>
                  {counter && (
                    <>
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2.5}
                        delay={0}
                      />
                      <span
                        style={{
                          color: "var(--primary-color)",
                          fontSize: "40px",
                          fontWeight: 700,
                        }}
                      >
                        %
                      </span>
                    </>
                  )}
                  <p
                    style={{
                      color: "var(--desc-color)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
          {tabs &&
            tabs
              .filter((tab) => tab.desc !== "Deposit bonus")
              .map((item) => (
                <div className={styles[`stats-card`]} key={item.number}>
                  {counter && (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                      delay={0}
                    />
                  )}
                  <p>{item.desc}</p>
                </div>
              ))}
        </div>
      </Layout>
    </ScrollTrigger>
  );
};

export default Statistics;
