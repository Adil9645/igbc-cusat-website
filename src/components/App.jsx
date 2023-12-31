import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Footer from "./Footer";
import Team from "./Team";

function App() {
  return (
    <div class="bg">
      <LandingPage />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
