import React from "react";

const Container = ({ children }: any) => {
  return (
    <div className="w-full md:max-w-[1160px] container mx-auto ">
      {children}
    </div>
  );
};

export default Container;
