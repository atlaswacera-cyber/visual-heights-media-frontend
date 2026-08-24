import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import InspirationPage from "./components/InspirationPage/InspirationPage.jsx";
import DashboardPage from "./components/DashboardPage/DashboardPage.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import "./App.css";

function HomePage() {
  return (
    <main className="app__content">
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </main>
  );
}
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
