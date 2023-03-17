import Footer from "@components/navigation/Footer";
import Navbar from "@components/navigation/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function GeneralLayout({ children }: Props) {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      {children}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default GeneralLayout;
