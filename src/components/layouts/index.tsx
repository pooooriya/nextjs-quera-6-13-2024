import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
