import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "components/HomeNavBar";
import Wings from "components/Wings";
import Footer from "components/Footer";

function Home() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="main">
          <Wings />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
