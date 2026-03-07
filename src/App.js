import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DepartmentPage from "./pages/DepartmentPage";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "./components/ui/sonner";

import Contact from "./pages/Contact";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/health-care" element={<DepartmentPage type="healthcare" />} />
          <Route path="/defense-sector" element={<DepartmentPage type="defense" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-immigration" element={<DepartmentPage type="immigration" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <CookieConsent />
    </div>
  );
}

export default App;
