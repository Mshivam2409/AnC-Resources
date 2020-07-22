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
import PdfViewer from "components/PdfViewer";

//ResourceData
const Resumes = [
  {
    name: "Analytics",
    resumes: [
      "https://drive.google.com/file/d/1OfxCTyXaxTYOEqsUwU-a5NHN9FVTbvUj/preview",
    ],
  },
  {
    name: "Core",
    resumes: [],
  },
  {
    name: "Finance",
    resumes: [],
  },
  {
    name: "Fintech",
    resumes: [],
  },
  {
    name: "HFT & Quant",
    resumes: [],
  },
  {
    name: "Research Intern",
    resumes: [],
  },
  {
    name: "Software",
    resumes: [],
  },
  {
    name: "Tehnomanagerial",
    resumes: [],
  },
];

// core components
const Resume = () => {
  const [iconPills, setIconPills] = React.useState("0");
  return (
    <>
      <Container>
        <Row>
          <p className="category">Sample Resumes</p>
          <Card>
            <CardHeader>
              <Nav className="justify-content-center" role="tablist" tabs>
                {Resumes.map((resource, index) => {
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
                {Resumes.map((resource, index) => {
                  return (
                    <TabPane tabId={"iconPills" + index.toString()}>
                      <p class="h5" color="dark">
                        <ul>
                          {resource.resumes.map((resume, index) => {
                            return (
                              <li style={{ textAlign: "left" }}>
                                <PdfViewer
                                  name={"Sample " + (index + 1)}
                                  link={resume}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </p>
                    </TabPane>
                  );
                })}
              </TabContent>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
