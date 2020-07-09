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
const data = [
  {
    name: "Mechanical",
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

// core components
const CDevInternGyan = () => {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  {data.map((resource, index) => {
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
                  {/* <NavItem>
                    <NavLink
                      className={iconPills === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("1");
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                      Internship Preparation
                    </NavLink>
                  </NavItem> */}
                  {/* <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Settings
                      </NavLink>
                    </NavItem> */}
                </Nav>
                {/* Internship Resources */}
              </CardHeader>
              <CardBody>
                <TabContent className="text-left" activeTab={"iconPills"}>
                  <TabPane tabId="iconPills">
                    <p class="h5" color="dark"></p>
                  </TabPane>
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
