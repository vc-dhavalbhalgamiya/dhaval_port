import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
// import Sidebar from '../components/sidebar';

// import Footer from '../components/footer'

const Adminlayout = ({ children, ...rest }) => {
  //   const [sidebarRe, setSidebarRe] = useState(false);

  //   const toggle = () => setSidebarRe(!sidebarRe);
  const [darkTheme, setDarkTheme] = useState(false);

  // React useEffect hook that will fire up
  // when "darkTheme" changes
  useEffect(() => {
    // const root = document.documentElement;
    // root?.style.setProperty("--c_primary", darkTheme ? "#262833" : "#ffffff");
  }, [darkTheme]);
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-body">{children}</div>
    </div>
  );
};
export default Adminlayout;
