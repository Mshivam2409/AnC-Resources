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
    name: "SPO Preparation Portal",
    link: "http://spo.iitk.ac.in/preparation/",
  },
  {
    name: "Internship Guide 17-18",
    link: "http://spo.iitk.ac.in/preparation/Internship_insight_2017-18.html",
  },
  {
    name: "Internship Guide 18-19",
    link: "http://spo.iitk.ac.in/preparation/Internship_insight_2018-19.html",
  },
];

// core components
const Spo = () => {
  return (
    <>
      <Container>
        <Row>
          <p className="category">SPO Preparation Material</p>
          <Card>
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

export default Spo;
