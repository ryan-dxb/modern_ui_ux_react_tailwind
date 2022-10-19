import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium  text-primary bg-blue-gradient rounded-lg outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
