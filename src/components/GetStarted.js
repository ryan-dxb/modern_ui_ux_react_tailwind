import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-1 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="mr-2 font-medium leading-6 font-poppins">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="object-contain w-6 h-6" />
        </div>
        <p className="font-medium leading-6 font-poppins">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
