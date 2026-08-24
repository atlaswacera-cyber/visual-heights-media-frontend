import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <main className="page-not-found">
      <div className="page-not-found__content">
        <p className="page-not-found__code">404</p>
        <h1 className="page-not-found__title">This page is out of frame.</h1>
        <p className="page-not-found__text">
          The page you requested could not be found.
        </p>
        <Link className="page-not-found__link" to="/">
          Return home
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
