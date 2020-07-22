import React from "react";
import { useHistory } from "react-router-dom";
import LoadingScreen from 'react-loading-screen';

// core components
import HomeHeader from "../components/HomeHeader";
import HomeNavbar from "components/HomeNavBar";
import Wings from "components/Wings";
import Footer from "components/Footer";

function Home(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  React.useEffect(() => {
    setLoading(true);
    props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
      } else {
        history.push('/login');
      }
    });
  }, [props.firebase.auth, history]);
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

      {(!loading) &&
      <>
        <HomeNavbar firebase={props.firebase}/>
        <div className="wrapper">
          <HomeHeader />
          <div className="main">
            <Wings />
          </div>
          <Footer />
        </div>
      </>
      }
    </>
  );
}

export default Home;
