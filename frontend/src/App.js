import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ChatBarPopup from "./components/chatBar/ChatBar";
import AboutPage from "./pages/about/AboutPage";
import Casino from "./pages/casino/Casino";
import ServicesPage from "./pages/services/ServicesPage";
import KnivesPage from "./pages/knives/KnivesPage";
import Cases2 from "./pages/cases/Cases";
import Footer from "./components/core/footer/Footer";
import HomePage from "./pages/home/HomePage";
import ScrollToTop from "./components/Navbar/ScrollToTop";
import PortalComponent from "./components/Portal/PortalComponent";

import "./App.css";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cases", element: <Cases2 /> },
  { path: "/casino", element: <Casino /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/knives", element: <KnivesPage /> },
];

function App() {
  return (
    <>
      <ScrollToTop />
      <PortalComponent />
      <ChatBarPopup />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
