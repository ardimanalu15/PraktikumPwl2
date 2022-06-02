import "./App.css";
import NavbarPort from "./components/Navbar";
import IntroHome from "./components/Intro";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Work";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// import { useContext } from "react";

// import { themeContext } from "./Context";



function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
    // className="App"
    // style={{
    //   background: darkMode ? "black" : "",
    //   color: darkMode ? "white" : "",
    // }}
  >
    <NavbarPort />
    <IntroHome />
    <Services />
    <Experience />
    {/* <Works/>     */}
    <Portfolio />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
