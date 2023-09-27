import React from "react";

const Button = (props: any) => {
  return (
    <button
      type="button"
      className={`text-white font-medium rounded-lg text-center mr-3 md:mr-0 ${props.design}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
