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
} from "reactstrap";

//ResourceData
const Data = [
  {
    name: "Coding Test Resources",
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vR4UDwCPpZUTcqR34noKnXy7H6kFduonsSTiZ27Z5K2YB_yufMIIOu7KlGIP9FTYu5nJD2Nldb7HAEG/pub?start=false&loop=false&delayms=3000",
  },
  {
    name: "Finance Resources",
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vT-8iJPm8dMaGpUPuRP5CJf07aVlJmSOJ3s5yV6L5ErBsSqq83ozPu51bYZ-cLRq23wzgDY46lYEdUx/pub?start=false&loop=false&delayms=3000",
  },
  {
    name: "Quant Resources",
    link:
      "https://docs.google.com/presentation/d/e/2PACX-1vQc20v-S9oBQiTd8BX2T98RvUB1VnfVaQ01fja5Fu5GlgS1C3vjrXfYOUcAZSy7Ss_-hihxjnVAxOQM/pub?start=false&loop=false&delayms=3000",
  },
];

// core components
const CDevInternPrep = () => {
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <p className="category">Internship Preparation</p>
            <Card>
              {/* <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className="active"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="now-ui-icons objects_umbrella-13"></i>
                      Internship Preparation
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader> */}
              <CardBody>
                <TabContent className="text-left" activeTab={"iconPills"}>
                  <TabPane tabId="iconPills">
                    <p class="h5" color="dark">
                      <ul>
                        {Data.map((resource) => {
                          return (
                            <li>
                              <a
                                href={resource.link}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {resource.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </p>
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

export default CDevInternPrep;
