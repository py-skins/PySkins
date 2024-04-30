import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ChatBarPopup from "./components/ChatBar/ChatBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import CasinoPage from "./pages/CasinoPage/CasinoPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import MarketSkinPage from "./pages/MarketSkinPage/MarketSkinPage";
import KnivesPage from "./pages/KnivesPage/KnivesPage";
import CasesContainerPage from "./pages/CasesContainerPage/CasesContainerPage";
import CasesOpeningPage from "./pages/CaseOpeningPage/CaseOpeningPage";
import Footer from "./components/core/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ScrollToTop from "./components/Navbar/ScrollToTop";
import PortalComponent from "./components/Portal/PortalComponent";
import UserProfilePage from "./pages/ProfilePage/UserProfilePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <UserProfilePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cases", element: <CasesContainerPage /> },
  { path: "/cases/:id", element: <CasesOpeningPage /> },
  { path: "/casino", element: <CasinoPage /> },
  { path: "/marketplace", element: <MarketPage /> },
  { path: "/marketplace/:id", element: <MarketSkinPage /> },
  { path: "/knives", element: <KnivesPage /> },
  { path: "*", element: <PageNotFound /> },
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
