import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
const Layout = ({ activePage, children, hideFooter }) => {
  return (
    <div>
      <Navbar activePage={activePage} />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};
export default Layout;
