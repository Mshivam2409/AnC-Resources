import React from "react";
import  { useHistory } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import LoadingScreen from 'react-loading-screen';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components

function RegisterPage(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confpassword, setConfpassword] = React.useState('');
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [lastFocus1, setLastFocus1] = React.useState(false);
  const show = notify.createShowQueue();

  React.useEffect(() => {
    document.title = "Register";
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const register = (e) => {
    setLoading(true);
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0 || confpassword.trim().length === 0) {
      setLoading(false);
      show('All fields required!', 'error');
    } else {
      if (email.toLowerCase().search('@iitk.ac.in') > -1) {
        if (password === confpassword) {
          props.firebase.doCreateUserWithEmailAndPassword(email, confpassword).then((user) => {
            props.firebase.getUser().sendEmailVerification().then(() => {
              setLoading(false);
              show('Verification email sent', 'success');
              props.firebase.doSignOut().then(() => {
                history.push('/login');
              });
            }).catch((err) => {
              setLoading(false);
              show(err.message, 'error');
              props.firebase.doSignOut();
            });
          }).catch((err) => {
            setLoading(false);
            show(err.message, 'error');
            props.firebase.doSignOut();
          });
        } else {
          setLoading(false);
          show('Passwords do not match!', 'error');
        }
      } else {
        setLoading(false);
        show('Only IITK emails allowed!', 'error');
      }
    }
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    if(name === 'userEmail') {
      setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }
    else if(name === 'confPassword'){
      setConfpassword(value);
    }
  };

  return (
    <>
      {(loading) && 
      <LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc={require("assets/img/anclogo.png")}
        text='Processing your request. Please wait...'
      >
      <>
      </>
      </LoadingScreen>
      }
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/anclogo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="IITK Email"
                        type="email"
                        name="userEmail"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange = {(event) => onChangeHandler(event)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Set Password"
                        type="password"
                        name="userPassword"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange = {(event) => onChangeHandler(event)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus1 ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        name="confPassword"
                        onFocus={() => setLastFocus1(true)}
                        onBlur={() => setLastFocus1(false)}
                        onChange = {(event) => onChangeHandler(event)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#"
                      type="submit"
                      onClick={(e) => register(e)}
                      size="lg"
                    >
                      Create Account
                    </Button>
                    <div className="pull-middle">
                      <h6>
                        <a
                          className="link"
                          href="#"
                          onClick={(e) => {e.preventDefault();history.push('/login')}}
                        >
                          Already Registered?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
