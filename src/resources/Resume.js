import React, { useState, useEffect } from "react";

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
var Resumes = [
  {
    name: "Analytics",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170738_2 - Sunit Gautam.pdf",
      "gs://careerportal-816f6.appspot.com/inbound8897653106244602926 - Medha Agarwal.pdf",
    ],
    urls: [],
  },
  {
    name: "Core",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170295_1 - Harshit Verma.pdf",
      // "gs://careerportal-816f6.appspot.com/MITSUBISHI2019233(1) - Aditya Tiwari.pdf",
      "gs://careerportal-816f6.appspot.com/cv-onepage - Aniket Sanghi.pdf",
    ],
    urls: [],
  },
  {
    name: "Finance",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170318_2 - Jay Gupta.pdf",
      "gs://careerportal-816f6.appspot.com/170520_2.pdf - Raghav Maheshwari.pdf",
      "gs://careerportal-816f6.appspot.com/170817_1 (1) - Yash Maheshwari.pdf",
      "gs://careerportal-816f6.appspot.com/cv - Parth Athale.pdf",
    ],
    urls: [],
  },
  {
    name: "Fintech",
    resumes: ["gs://careerportal-816f6.appspot.com/170137_3 - Anuj Shah.pdf"],
    urls: [],
  },
  {
    name: "HFT & Quant",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170191_2 (1) - Ayush Gupta.pdf",
      "gs://careerportal-816f6.appspot.com/Akshat Agrawal - akshat agrawal.pdf",
      "gs://careerportal-816f6.appspot.com/CV - Jaydeep Goyal.pdf",
    ],
    urls: [],
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
    urls: [],
  },
  {
    name: "Tehnomanagerial",
    resumes: [
      "gs://careerportal-816f6.appspot.com/umang-malik - Umang Malik.pdf",
      "gs://careerportal-816f6.appspot.com/Pence_Resume_final - Pence Mataria.pdf",
      "gs://careerportal-816f6.appspot.com/170211_1.pdf",
      "gs://careerportal-816f6.appspot.com/170448_Master - Nitik Jain.pdf",
    ],
    urls: [],
  },
];

// core components
const Resume = () => {
  var storage = firebase.storage();
  const [iconPills, setIconPills] = React.useState("0");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getUrls = async () => {
      setisLoading(true);
      for (let index = 0; index < Resumes.length; index++) {
        var category = Resumes[index];
        for (let i = 0; i < category.resumes.length; i++) {
          var resume = category.resumes[i];
          var gsReference = storage.refFromURL(resume);
          const url = await gsReference.getDownloadURL();
          category.urls.push(url);
        }
      }
      setisLoading(false);
    };
    getUrls();
  }, []);
  return (
    <>
      {isLoading && <div></div>}
      {!isLoading && (
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
                            {resource.urls.map((url, index) => {
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
      )}
    </>
  );
};

export default Resume;
