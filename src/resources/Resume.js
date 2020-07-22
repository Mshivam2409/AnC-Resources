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
import firebase from "firebase";

//ResourceData
const Resumes = [
  {
    name: "Analytics",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170738_2 - Sunit Gautam.pdf",
    ],
  },
  {
    name: "Core",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170295_1 - Harshit Verma.pdf",
      "gs://careerportal-816f6.appspot.com/MITSUBISHI2019233(1) - Aditya Tiwari.pdf",
      "gs://careerportal-816f6.appspot.com/cv-onepage - Aniket Sanghi.pdf",
    ],
  },
  {
    name: "Finance",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170318_2 - Jay Gupta.pdf",
      "gs://careerportal-816f6.appspot.com/170520_2.pdf - Raghav Maheshwari.pdf",
      "gs://careerportal-816f6.appspot.com/170817_1 (1) - Yash Maheshwari.pdf",
    ],
  },
  {
    name: "Fintech",
    resumes: ["gs://careerportal-816f6.appspot.com/170137_3 - Anuj Shah.pdf"],
  },
  {
    name: "HFT & Quant",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170191_2 (1) - Ayush Gupta.pdf",
      "gs://careerportal-816f6.appspot.com/Akshat Agrawal - akshat agrawal.pdf",
      "gs://careerportal-816f6.appspot.com/CV - Jaydeep Goyal.pdf",
    ],
  },
  //   {
  //     name: "Research Intern",
  //     resumes: [],
  //   },
  {
    name: "Software",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170108_1 - Aniket Gupta.pdf",
      "gs://careerportal-816f6.appspot.com/170319_3 - Jay Mundra.pdf",
      "gs://careerportal-816f6.appspot.com/170402_1 (1) - Mudit Agrawal.pdf",
      "gs://careerportal-816f6.appspot.com/Akshat Agrawal - akshat agrawal.pdf",
      "gs://careerportal-816f6.appspot.com/Resume__Yash_Baheti - Yash Baheti.pdf",
      "gs://careerportal-816f6.appspot.com/umang-malik - Umang Malik.pdf",
    ],
  },
  {
    name: "Tehnomanagerial",
    resumes: [
      "gs://careerportal-816f6.appspot.com/umang-malik - Umang Malik.pdf",
      "gs://careerportal-816f6.appspot.com/Pence_Resume_final - Pence Mataria.pdf",
    ],
  },
];

// core components
const Resume = () => {
  var storage = firebase.storage();
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
                          {resource.resumes.map(async (resume, index) => {
                            var gsReference = storage.refFromURL(resume);
                            const url = await gsReference.getDownloadURL();
                            return (
                              <li style={{ textAlign: "left" }}>
                                <a
                                  href={url}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  download
                                >
                                  {"Sample " + (index + 1)}
                                </a>
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
