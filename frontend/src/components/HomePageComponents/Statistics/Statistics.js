import React, { useState } from "react";
import "./statistics.scss"; // Import your SCSS file
import Container from "../../../components/Container/Container";
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
      <Container>
        <div className="stats-card-wrapper">
          {tabs &&
            tabs
              .filter((tab) => tab.desc === "Deposit bonus")
              .map((item) => (
                <div className="stats-card" key={item.number}>
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
                <div className="stats-card" key={item.number}>
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
      </Container>
    </ScrollTrigger>
  );
};

export default Statistics;
