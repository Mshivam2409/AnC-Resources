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
const core = [
  {
    name: "Mechanical",
    link:
      "https://www.youtube.com/embed/Rwu-tVdhcOI?list=PL8_ALs6__lmzVNdn__iPx9VhDFGSs6xGb",
  },
  {
    name: "Aerospace",
    link:
      "https://www.youtube.com/embed/cLDLUhXOZ5U?list=PL8_ALs6__lmy53m3hZT9ukNqOsrsUF5_o",
  },
  {
    name: "Computer Science",
    link:
      "https://www.youtube.com/embed/h8PRy10RjYw?list=PL8_ALs6__lmwqzdayb0F0GoaokHpvBGsj",
  },
  {
    name: "Electrical",
    link:
      "https://www.youtube.com/embed/x9G2kNN5WIc?list=PL8_ALs6__lmwHZqvJaf3V3McWjCLyCnSE",
  },
  {
    name: "Economics",
    link:
      "https://www.youtube.com/embed/R4LmTsXfk40?list=PL8_ALs6__lmzb-KjccOLIx5BgA2qpyDRc",
  },
  {
    name: "Physics",
    link:
      "https://www.youtube.com/embed/VD4BkxwmvkE?list=PL8_ALs6__lmw6CLnCMBKS7KtCX9c3oRqu",
  },
  {
    name: "BS-BE",
    link:
      "https://www.youtube.com/embed/0b_9hxkBmb4?list=PL8_ALs6__lmyXxhx9zAfN5iX6a4uZQxCi",
  },
  {
    name: "Chemical",
    link:
      "https://www.youtube.com/embed/t-ZxHwawV2k?list=PL8_ALs6__lmyJD-vM_yTPEEPw0V1aalP8",
  },
  {
    name: "Earth Science",
    link:
      "https://www.youtube.com/embed/525xFYimSBE?list=PL8_ALs6__lmzsrAGhrQ8EJgPjJ0Jur6L0",
  },
  {
    name: "Chemistry",
    link:
      "https://www.youtube.com/embed/UcKE_YbMJac?list=PL8_ALs6__lmzKBMx5YD29byvWzM4b9Fm0",
  },
  {
    name: "Civil",
    link:
      "https://www.youtube.com/embed/9EmQ_6YJKBE?list=PL8_ALs6__lmwSHaETL9_GVvqzfq4myLPO",
  },
  {
    name: "Material Science",
    link:
      "https://www.youtube.com/embed/y71rMdjCPqE?list=PL8_ALs6__lmzNc9se-V7K38iKW-cRwIBE",
  },
  {
    name: "Mathematics",
    link:
      "https://www.youtube.com/embed/whVrUaQQwUo?list=PL8_ALs6__lmzIFbGPzPLb29jQyPOFCy_0",
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
const noncore = [
  {
    name: "Machine Learning",
    link:
      "https://www.youtube.com/embed/m9r7D3BaTzs?list=PL8_ALs6__lmzg6fUDjSWoix--wlMJq64A",
  },
  {
    name: "Analytics",
    link:
      "https://www.youtube.com/embed/gI50lrio3b8?list=PL8_ALs6__lmwDp56yvz7M8KET5enPOq1a",
  },
  {
    name: "Quant",
    link:
      "https://www.youtube.com/embed/JGmh6n9fTlo?list=PL8_ALs6__lmxqxQAc7OYNB8LqWGOeENRN",
  },
  {
    name: "Data Science & Data Engineering",
    link:
      "https://www.youtube.com/embed/NgAbCy4xiMA?list=PL8_ALs6__lmxFcOweN2On97Avog87NAtQ",
  },
  {
    name: "Finance",
    link:
      "https://www.youtube.com/embed/Ox7Nu0t9Tg4?list=PL8_ALs6__lmxXKX7V63Kny5VxWlZisD5-",
  },
  {
    name: "Software",
    link:
      "https://www.youtube.com/embed/N95Ke-uH6xU?list=PL8_ALs6__lmwi5eyfL_4Qc90MciGCNkjv",
  },
  {
    name: "Product Management",
    link:
      "https://www.youtube.com/embed/Jq4YQiOugG8?list=PL8_ALs6__lmy0EmOJb3zjzyFbx8vI0hYo",
  },
];

// Machine Learning
// Analytics
// Quant
// Data Science & Data Engineering
// Finance
// Software
// Product Management

// core components
const CDevInternGyan = () => {
  const [iconPills, setIconPills] = React.useState("0");
  const [pills, setPills] = React.useState("0");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <p className="category">InternGYAN (Core)</p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  {core.map((resource, index) => {
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
                  {/* <TabContent className="text-left" activeTab={"iconPills"}> */}
                  {/* <TabPane tabId="iconPills">
                    <p class="h5" color="dark"></p>
                  </TabPane> */}
                  {core.map((resource, index) => {
                    return (
                      <TabPane tabId={"iconPills" + index.toString()}>
                        <iframe
                          title={resource.name}
                          width="100%"
                          height="538"
                          src={resource.link}
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </TabPane>
                    );
                  })}
                </TabContent>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <p className="category">InternGYAN (Non-Core)</p>
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  {noncore.map((resource, index) => {
                    return (
                      <NavItem>
                        <NavLink
                          className={pills === index.toString() ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setPills(index.toString());
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
                <TabContent className="text-center" activeTab={"pills" + pills}>
                  {/* <TabContent className="text-left" activeTab={"iconPills"}> */}
                  {/* <TabPane tabId="iconPills">
                    <p class="h5" color="dark"></p>
                  </TabPane> */}
                  {noncore.map((resource, index) => {
                    return (
                      <TabPane tabId={"pills" + index.toString()}>
                        <iframe
                          title={resource.name}
                          width="100%"
                          height="538"
                          src={resource.link}
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </TabPane>
                    );
                  })}
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
