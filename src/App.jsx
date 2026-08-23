import { useState } from "react";
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
import LoginModal from "./components/LoginModal/LoginModal.jsx";
import "./App.css";

const LOGIN_STORAGE_KEY = "vhm-demo-is-logged-in";
const SAVED_MEDIA_STORAGE_KEY = "vhm-saved-media";

function getStoredValue(key, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

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
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    getStoredValue(LOGIN_STORAGE_KEY, false),
  );
  const [savedMedia, setSavedMedia] = useState(() =>
    getStoredValue(SAVED_MEDIA_STORAGE_KEY, []),
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function saveMedia(item) {
    setSavedMedia((currentMedia) => {
      if (currentMedia.some((savedItem) => savedItem.id === item.id)) {
        return currentMedia;
      }

      const updatedMedia = [...currentMedia, item];
      localStorage.setItem(SAVED_MEDIA_STORAGE_KEY, JSON.stringify(updatedMedia));
      return updatedMedia;
    });
  }

  function removeSavedMedia(itemId) {
    setSavedMedia((currentMedia) => {
      const updatedMedia = currentMedia.filter((item) => item.id !== itemId);
      localStorage.setItem(SAVED_MEDIA_STORAGE_KEY, JSON.stringify(updatedMedia));
      return updatedMedia;
    });
  }

  function handleLogin() {
    localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(true));
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  }

  function handleLogout() {
    localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(false));
    setIsLoggedIn(false);
  }

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/inspiration"
          element={
            <InspirationPage
              isLoggedIn={isLoggedIn}
              savedMedia={savedMedia}
              onSave={saveMedia}
              onLoginClick={() => setIsLoginModalOpen(true)}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              isLoggedIn={isLoggedIn}
              savedMedia={savedMedia}
              onRemove={removeSavedMedia}
              onLoginClick={() => setIsLoginModalOpen(true)}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
