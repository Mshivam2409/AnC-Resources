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
      "gs://careerportal-816f6.appspot.com/AyushreeGupta - Ayushree Gupta.pdf",
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
      "gs://careerportal-816f6.appspot.com/inbound1495326740525160075 - Sumit Kumar.pdf",
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
      "gs://careerportal-816f6.appspot.com/Hunar_Resume - Hunarpreet Singh.pdf",
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
      "gs://careerportal-816f6.appspot.com/Resume_Dev - Sahil Dhull.pdf",
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

const Drive = [
  {
    name: "Aerospace Core",
    drive:
      "https://drive.google.com/drive/folders/1WLd8aiBoi4e_X8sCB5zH4SFSTrDLUxb8?usp=sharing",
  },
  {
    name: "Analytics",
    drive:
      "https://drive.google.com/drive/folders/1KFeH27Yvqj8x8f4EfIJ3J8OLsBbuXUd3?usp=sharing",
  },
  {
    name: "Chemical Core",
    drive:
      "https://drive.google.com/drive/folders/1eTjMBCkps5fzzJacZk3J9c5aF2C0PJEJ?usp=sharing",
  },
  {
    name: "Consulting",
    drive:
      "https://drive.google.com/drive/folders/1jftp24f_QZRPbRfxptmln99-i2qtm4bW?usp=sharing",
  },
  {
    name: "CSE Core",
    drive:
      "https://drive.google.com/drive/folders/1BkBFkUjVI48DVmYeTwy_Y7t7EYSs3wwT?usp=sharing",
  },
  {
    name: "Electrical Core",
    drive:
      "https://drive.google.com/drive/folders/1buacY7vfgAvfYcWHaj1Dg4xt_A-RB9w4?usp=sharing",
  },
  {
    name: "HFT and Quant",
    drive:
      "https://drive.google.com/drive/folders/1da6-Eq49jqQ6_lKfdKTdkx7X24-g-wmg?usp=sharing",
  },
  {
    name: "Mechanical Core",
    drive:
      "https://drive.google.com/drive/folders/18zGkRyoEzMXLOwDARSnT8Zyp7nZso8H0?usp=sharing",
  },
  {
    name: "MSE Core",
    drive:
      "https://drive.google.com/drive/folders/18Y6J7MTZa36kItTI1oxMeIInSycMS7zE?usp=sharing",
  },
  {
    name: "Software",
    drive:
      "https://drive.google.com/drive/folders/1ovnaJOi6dh35IeQGnfYzempzMrmK2fPf?usp=sharing",
  },
  {
    name: "UX Designer",
    drive:
      "https://drive.google.com/drive/folders/1cNGXKZzNpVZC_re6wKo1yP6t3Dpaa2kr?usp=sharing",
  },
];

// core components
const Resume = () => {
  const [iconPills, setIconPills] = React.useState("0");

  return (
    <>
      {
        <Container>
          <Row>
            <p className="category">Sample Resumes</p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={"active"}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills(index.toString());
                      }}
                    >
                      Resumes
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent
                  className="text-center"
                  activeTab={"iconPills" + iconPills}
                >
                  <TabPane tabId={"iconPills" + "0"}>
                    <p class="h5" color="dark">
                      <ul>
                        {Drive.map((resource, index) => {
                          return (
                            <li style={{ textAlign: "left" }}>
                              <a
                                href={resource.drive}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {"View Samples "}
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
      }
    </>
  );
};

export default Resume;
