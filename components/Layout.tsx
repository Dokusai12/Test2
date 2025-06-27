import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;