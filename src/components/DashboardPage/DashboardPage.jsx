import MediaGrid from "../MediaGrid/MediaGrid.jsx";
import "./DashboardPage.css";

function DashboardPage({ isLoggedIn, savedMedia, onRemove, onLoginClick }) {
  return (
    <main className="dashboard-page">
      <div className="dashboard-page__content">
        <p className="dashboard-page__eyebrow">Client Space</p>
        <h1 className="dashboard-page__title">Your visual project hub.</h1>
        {!isLoggedIn && (
          <>
            <p className="dashboard-page__text">
              Sign in to view and manage your saved visual inspiration.
            </p>
            <button
              className="dashboard-page__login-button"
              type="button"
              onClick={onLoginClick}
            >
              Login to continue
            </button>
          </>
        )}
        {isLoggedIn && savedMedia.length === 0 && (
          <p className="dashboard-page__text">
            No saved inspiration yet. Browse the inspiration page to save visual
            references for your project.
          </p>
        )}
        {isLoggedIn && savedMedia.length > 0 && (
          <>
            <p className="dashboard-page__text">
              Your saved inspiration is stored only in this browser for the Stage
              1 demonstration.
            </p>
            <MediaGrid items={savedMedia} onRemove={onRemove} />
          </>
        )}
      </div>
    </main>
  );
}

export default DashboardPage;
