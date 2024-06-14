import Button from "@/components/basic/button";
import Container from "@/components/basic/container";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 bg-slate-200">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="https://quera.org/static/images/logo/logo-quera-heavy.2-1c1287ee3575.svg"
              alt="quera logo"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Button>ورود</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
