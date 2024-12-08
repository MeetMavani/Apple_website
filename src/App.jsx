import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import MacPage from "./components/Mac/MacPage";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main className="bg-black">
        <Navbar />
        <Routes>
          {/* Home Route: Renders all components for scrolling */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlights />
                <Model />
                <Features />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          {/* Mac Route */}
          <Route path="/mac" element={<MacPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
