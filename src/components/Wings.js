import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

// core components

function Wings() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Career Development Wing</h2>
              <h5 className="description">
                Formation of this wing of the Council with the mandate of Career
                Development of students shall provide an extraordinary boost in
                regard to Career Aspects. It would also allow to bring all
                entities in the Gymkhana oriented towards various sides of
                career development under a single umbrella facilitating them and
                their collaborations. The wing will make efforts to ensure that
                CDC realizes its vision at the earliest possible and that it
                provides all the necessary support for this purpose.
              </h5>
              <NavLink to="/research">
                <Button
                  className="btn-round mr-1"
                  color="dark"
                  size="lg"
                  target="_blank"
                  na
                >
                  View Resources
                </Button>
              </NavLink>
              {/* <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Wings;
