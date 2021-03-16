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
    name: "Career Handbook Part 1",
    link:
      "https://drive.google.com/file/d/18t9_06CrGNKXLRMdxw1_asK4bQo70XSX/view",
  },
  {
  	name: "Placement Guide Part 1",
  	link:
  	  "https://drive.google.com/file/d/1MWtqZGNT8GWQ7HlbH8dZyFMiMG4mzAzU/view",
  }
];

// core components
const AncResources = () => {
  return (
    <>
      <Container>
        <Row>
          <p className="category">Resources From AnC Council</p>
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
    </>
  );
};

export default AncResources;
