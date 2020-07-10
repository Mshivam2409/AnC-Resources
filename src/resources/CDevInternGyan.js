import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

//ResourceData
const core = [
  {
    name: "Mechanical",
    link:
      "https://www.youtube.com/embed/Rwu-tVdhcOI?list=PL8_ALs6__lmzVNdn__iPx9VhDFGSs6xGb",
  },
  {
    name: "Electrical",
  },
  {
    name: "Computer Science",
  },
  {
    name: "Aerospace",
  },
  {
    name: "Economics",
  },
  {
    name: "Physics",
  },
  {
    name: "BS-BE",
  },
  {
    name: "Chemical ",
  },
  {
    name: "Earth Science",
  },
  {
    name: "Chemistry",
  },
  {
    name: "Civil",
  },
];
// Mechanical
// Aerospace
// Computer Science
// Electrical
// Economics
// Physics
// BS-BE
// Chemical
// Earth Science
// Chemistry
// Civil
// Material Science
// Mathematics
const noncore = [
  {
    name: "Machine Learning",
  },
];

// Machine Learning
// Analytics
// Quant
// Data Science & Data Engineering
// Finance
// Software
// Product Management

// core components
const CDevInternGyan = () => {
  const [iconPills, setIconPills] = React.useState("0");
  const [pills, setPills] = React.useState("0");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <p className="category">InternGYAN (Core)</p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  {core.map((resource, index) => {
                    return (
                      <NavItem>
                        <NavLink
                          className={
                            iconPills === index.toString() ? "active" : ""
                          }
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconPills(index.toString());
                          }}
                        >
                          {resource.name}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent
                  className="text-center"
                  activeTab={"iconPills" + iconPills}
                >
                  {/* <TabContent className="text-left" activeTab={"iconPills"}> */}
                  {/* <TabPane tabId="iconPills">
                    <p class="h5" color="dark"></p>
                  </TabPane> */}
                  {core.map((resource, index) => {
                    return (
                      <TabPane tabId={"iconPills" + index.toString()}>
                        <iframe
                          title={resource.name}
                          width="100%"
                          height="538"
                          src={resource.link}
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </TabPane>
                    );
                  })}
                </TabContent>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <p className="category">InternGYAN (Non-Core)</p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  {noncore.map((resource, index) => {
                    return (
                      <NavItem>
                        <NavLink
                          className={pills === index.toString() ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills(index.toString());
                          }}
                        >
                          {resource.name}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="text-center" activeTab={"pills" + pills}>
                  {/* <TabContent className="text-left" activeTab={"iconPills"}> */}
                  {/* <TabPane tabId="iconPills">
                    <p class="h5" color="dark"></p>
                  </TabPane> */}
                  {noncore.map((resource, index) => {
                    return (
                      <TabPane tabId={"pills" + index.toString()}>
                        <iframe
                          title={resource.name}
                          width="100%"
                          height="538"
                          src={resource.link}
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </TabPane>
                    );
                  })}
                </TabContent>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CDevInternGyan;
