import React from "react";
import { useHistory } from "react-router-dom";
import LoadingScreen from "react-loading-screen";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WingNavbar from "components/WingNavbar";
import WingHeader from "components/WingHeader";
import Footer from "components/Footer";
//Resources
import CDevInternPrep from "resources/CdevInternPrep";
import CDevInternGyan from "resources/CDevInternGyan";
import Spo from "resources/Spo";
import Resume from "resources/Resume";

function CdevWing(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    document.title = "Career Development Wing | Resources | AnC";
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  React.useEffect(() => {
    setLoading(true);
    props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
      } else {
        history.push("/login");
      }
    });
  }, [props.firebase.auth, history]);
  return (
    <>
      {loading && (
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={require("assets/img/anclogo.png")}
          text="Processing your request. Please wait..."
        >
          <></>
        </LoadingScreen>
      )}
      {!loading && (
        <>
          <WingNavbar
            WINGNAME="CAREER DEVELOPMENT WING"
            firebase={props.firebase}
          />
          <div className="wrapper">
            <WingHeader />
            <div className="section">
              <Container>
                <div className="button-container">
                  {/* <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button> */}
                  {/* <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip> */}
                </div>
                <h3 className="title">About </h3>
                <h5 className="description">
                  The Career Development Wing of the Academics and Career
                  Council brings you a guide for resources useful for internship
                  preparation. Browse through each section to find resources
                  pertaining to your interest.
                </h5>
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    {/* <h4 className="title text-center">My Portfolio</h4> */}
                    {/* <div className="nav-align-center">
                  <Tabs></Tabs>
                </div> */}
                  </Col>
                </Row>
              </Container>
              <div className="section section-tabs">
                <Container>
                  <CDevInternPrep />
                  <Spo />
                  <CDevInternGyan />
                  <Resume />
                </Container>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default CdevWing;
