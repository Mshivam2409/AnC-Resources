import React from "react";
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

function PdfViewer(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      {/* <!-- Button trigger modal --> */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        {props.name}
      </a>

      {/* <!-- Modal --> */}
      <Modal isOpen={open} toggle={() => setOpen(false)} size="xl">
        <div
          className="modal-header justify-content-center"
          style={{ padding: 1 }}
        >
          <button
            className="close"
            type="button"
            onClick={() => setOpen(false)}
            style={{ color: "#000" }}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">{props.name}</h4>
        </div>
        <ModalBody>
          <p>
            <iframe src={props.link} width="100%" height="480"></iframe>
          </p>
        </ModalBody>
        {/* <div className="modal-footer">
          <Button color="default" type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div> */}
      </Modal>
    </React.Fragment>
  );
}

export default PdfViewer;
