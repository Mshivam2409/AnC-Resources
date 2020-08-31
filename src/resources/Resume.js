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
      "gs://careerportal-816f6.appspot.com/placementAll - Arnav Garg.pdf",
      "gs://careerportal-816f6.appspot.com/Placement_one_page - prajual maheshwari.pdf",
      "gs://careerportal-816f6.appspot.com/160659_5 - Shivank Khard.pdf",
      "gs://careerportal-816f6.appspot.com/160010_1 - Abhay Pratap Singh.pdf",
      "gs://careerportal-816f6.appspot.com/AyushreeGupta - Ayushree Gupta.pdf"
    ],
    urls: [],
  },
  {
    name: "Core",
    resumes: [
      "gs://careerportal-816f6.appspot.com/170295_1 - Harshit Verma.pdf",
      // "gs://careerportal-816f6.appspot.com/MITSUBISHI2019233(1) - Aditya Tiwari.pdf",
      "gs://careerportal-816f6.appspot.com/cv-onepage - Aniket Sanghi.pdf",
      "gs://careerportal-816f6.appspot.com/CV - Shreya Agrawal.pdf",
      "gs://careerportal-816f6.appspot.com/Resume_Core - Anant Chopra.pdf",
      "gs://careerportal-816f6.appspot.com/JLR_Resume_Aditya - Aditya Rajawat.pdf",
      "gs://careerportal-816f6.appspot.com/15807182_1 - Bhanupratap Niranjan.pdf",
      "gs://careerportal-816f6.appspot.com/inbound1495326740525160075 - Sumit Kumar.pdf"
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
      "gs://careerportal-816f6.appspot.com/Hunar_Resume - Hunarpreet Singh.pdf"
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
      "gs://careerportal-816f6.appspot.com/resume - Aniket Pandey.pdf",
      "gs://careerportal-816f6.appspot.com/resume - Hardik Harsh.pdf",
      "gs://careerportal-816f6.appspot.com/160002_1 - Aaditya Singh.pdf",
      "gs://careerportal-816f6.appspot.com/placement - Ashish Kumar.pdf",
      "gs://careerportal-816f6.appspot.com/Amartya Resume SDE-min - Amartya Prusty.pdf",
      "gs://careerportal-816f6.appspot.com/160299_2 - adarsh honakamble.pdf",
      "gs://careerportal-816f6.appspot.com/inbound1364827606138206469 - jenil mewada.pdf",
      "gs://careerportal-816f6.appspot.com/Utkarsh Barsaiyan Consulting Resume - Utkarsh Barsaiyan.pdf",
      "gs://careerportal-816f6.appspot.com/Resume_Dev - Sahil Dhull.pdf"
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
