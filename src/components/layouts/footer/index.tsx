import Container from "@/components/basic/container";
import React from "react";

const Footer = () => {
  return (
    <div className="p-3 bg-slate-200">
      <Container>
        <h6 className="text-center">
          <span> ساخته شده با</span>
          <span className="text-red-700 animate-pulse mx-1 text-2xl">
            &hearts;
          </span>
          <span> در بوتکمپ دلتا کئورا</span>
        </h6>
      </Container>
    </div>
  );
};

export default Footer;
