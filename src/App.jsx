import React from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import About from "../pages/About";
// import Patron from "../pages/Patron";
import Tracks from "../pages/Tracks";
import Committee from "../pages/Committee";
import Keynote from "../pages/Keynote";
import Guidelines from "../pages/guide"
import Schedule from "../pages/Schedule";
import Registration from "../pages/Registration";
import CallForPapers from "../pages/callforpapers"
import Contact from "../pages/Contact";
import Venue from "../pages/Venue";
import Footer from "../components/footer"

const App = () => {
  
  // const MainContent = () => {
  //   const location = useLocation();
  //   return location.pathname === "/" ? <Main /> : null;
  // };
  return (
    <>
      {/* <Router> */}
   
        <Navbar />

       
        <MainContent />
        <About />
        <Keynote />
        <Tracks />
        <Committee />
         <CallForPapers />
        <Guidelines/>
        {/* <PaperSubmit />
        <AuthorGuide /> */}
        <Schedule />
      <Registration />
       
        <Contact />
        {/* <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/patron" element={<Patron />} />
          <Route path="/call" element={<Call />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MainContent /> */}
      {/* </Router> */}
      <Venue />
      <Footer/>
    </>
  );
};

export default App;
