import React from "react";
import { Header } from "../components/Header";
// import Sidebar from '../components/sidebar';

// import Footer from '../components/footer'

const Adminlayout = ({ children, ...rest }) => {
  //   const [sidebarRe, setSidebarRe] = useState(false);

  //   const toggle = () => setSidebarRe(!sidebarRe);

  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-body">{children}</div>
    </div>
  );
};
export default Adminlayout;
