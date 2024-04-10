import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ChatBarPopup from "./components/ChatBar/ChatBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import CasinoPage from "./pages/CasinoPage/CasinoPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import KnivesPage from "./pages/KnivesPage/KnivesPage";
import CasesPage from "./pages/CasesPage/CasesPage";
import Footer from "./components/core/footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ScrollToTop from "./components/Navbar/ScrollToTop";
import PortalComponent from "./components/Portal/PortalComponent";
import UserProfilePage from "./pages/ProfilePage/UserProfilePage";

import "./App.css";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <UserProfilePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cases", element: <CasesPage /> },
  { path: "/casino", element: <CasinoPage /> },
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
