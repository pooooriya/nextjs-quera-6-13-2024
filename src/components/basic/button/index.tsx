import classNames from "classnames";
import React from "react";

const pallet: any = {
  contained: "!bg-blue-500 !hover:bg-blue-800",
  outline: "!text-blue-500 !border !border-blue-500",
  text: "!text-blue-500",
  base: "text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ",
};

// factory design pattern
const Button = ({ variant = "contained", children }: any) => {
  return (
    <button className={classNames(pallet.base, pallet[variant])}>
      {children}
    </button>
  );
};

export default Button;
