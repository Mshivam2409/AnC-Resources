import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "components/HomeNavBar";
import Wings from "components/Wings";
// import DarkFooter from "components/Footers/DarkFooter.js";

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
          {/* <Images /> */}
          {/* <BasicElements /> */}
          {/* <Navbars /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <Javascript /> */}
          {/* <Carousel /> */}
          {/* <NucleoIcons /> */}
          {/* <CompleteExamples /> */}
          {/* <SignUp /> */}
          {/* <Examples /> */}
          {/* <Download /> */}
          <Wings />
        </div>
        {/* <DarkFooter /> */}
      </div>
    </>
  );
}

export default Home;
