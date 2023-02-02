import React from "react";
import NavBar from "./Navbar";
import Welcome from "./../components/Welcome";
import About from "./../components/About";
import Services from "./../components/Services";
import Portfolio from "./../components/Portfolio";
import ContactUs from "./../components/ContactUs";
function Home() {

  return (
    <React.Fragment>

    <div className="main-container">
  <div className="bg">
  <NavBar />
 <Welcome />
<About />
<Services />
<Portfolio />
<ContactUs />
  </div>
  
    
 
  

</div>
</React.Fragment>

  );
}

export default Home;
