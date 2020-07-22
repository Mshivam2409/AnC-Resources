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
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170738_2%20-%20Sunit%20Gautam.pdf?alt=media&token=649380ec-2450-456b-8640-10f7f8bb3981",
    ],
  },
  {
    name: "Core",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170295_1%20-%20Harshit%20Verma.pdf?alt=media&token=8f68d846-dbbb-4532-bf5f-238b9cf0a4b1",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/MITSUBISHI2019233(1)%20-%20Aditya%20Tiwari.pdf?alt=media&token=b4fe7a14-0ba2-418f-92ce-23018e03dc1c",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/cv-onepage%20-%20Aniket%20Sanghi.pdf?alt=media&token=04d7dc01-b652-4808-acd7-a8fad0fc4893",
    ],
  },
  {
    name: "Finance",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170318_2%20-%20Jay%20Gupta.pdf?alt=media&token=a6c1eedb-345b-4d1f-95bc-e6df314ca219",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170520_2.pdf%20-%20Raghav%20Maheshwari.pdf?alt=media&token=ebc558d0-310b-4424-9d86-4f691f551df4",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170817_1%20(1)%20-%20Yash%20Maheshwari.pdf?alt=media&token=3ccba445-aee6-45b6-9168-fe27b3bce05f",
    ],
  },
  {
    name: "Fintech",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170137_3%20-%20Anuj%20Shah.pdf?alt=media&token=d6bf516c-0cf6-4426-9909-3f1c54859140",
    ],
  },
  {
    name: "HFT & Quant",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170191_2%20(1)%20-%20Ayush%20Gupta.pdf?alt=media&token=5fa0bc0d-9014-42cf-a707-59aa0d72634c",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/Akshat%20Agrawal%20-%20akshat%20agrawal.pdf?alt=media&token=7942d7e5-3378-4afb-a31b-81ea1ac777bb",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/CV%20-%20Jaydeep%20Goyal.pdf?alt=media&token=d81ade9c-5f4e-414d-b19d-64ffbd4281e1",
    ],
  },
  //   {
  //     name: "Research Intern",
  //     resumes: [],
  //   },
  {
    name: "Software",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170108_1%20-%20Aniket%20Gupta.pdf?alt=media&token=0a3047c0-22e2-40ae-8774-112472b3fd30",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170319_3%20-%20Jay%20Mundra.pdf?alt=media&token=f5329158-4ee1-455d-8715-e0c48404b1d6",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170402_1%20(1)%20-%20Mudit%20Agrawal.pdf?alt=media&token=4a33dfc9-6f20-472b-a73d-2a7f70d0578f",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/Akshat%20Agrawal%20-%20akshat%20agrawal.pdf?alt=media&token=7942d7e5-3378-4afb-a31b-81ea1ac777bb",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/Resume__Yash_Baheti%20-%20Yash%20Baheti.pdf?alt=media&token=b2ca225f-9963-42fc-a3ca-a54d0495c667",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/umang-malik%20-%20Umang%20Malik.pdf?alt=media&token=f4e08b8f-a3d9-4281-9d6a-25b4990e66c7",
    ],
  },
  {
    name: "Tehnomanagerial",
    resumes: [
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/170743_1%20-%20SUYASH%20SINGH.pdf?alt=media&token=c50e92de-406a-4117-9a70-27c08ad88c18",
      "https://firebasestorage.googleapis.com/v0/b/careerportal-816f6.appspot.com/o/Pence_Resume_final%20-%20Pence%20Mataria.pdf?alt=media&token=91f20cf3-3514-4220-8d08-2932bfbfb008",
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
                            var httpsReference = storage.refFromURL(resume);
                            const url = await httpsReference.getDownloadURL();
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
