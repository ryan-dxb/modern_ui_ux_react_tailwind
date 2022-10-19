import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center px-4 py-2 mb-2 rounded-lg bg-discount-gradient">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 text-5xl font-semibold text-white font-poppins ss:text-7xl ss:leading-[100px] leading-[75px]">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden mr-0 ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className=" text-5xl font-semibold w-full text-white font-poppins ss:text-6xl ss:leading-[100px] leading-[75px]">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Right Side Image */}
      <div
        className={`${styles.flexCenter} flex flex-1 md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-10 w-full h-full"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
