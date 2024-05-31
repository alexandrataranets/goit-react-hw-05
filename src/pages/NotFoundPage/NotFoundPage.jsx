import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage({ children }) {
  return (
    <div className={css.container}>
      <p className={css.error}>
        {children} Please go to{" "}
        <Link to="/" className={css.link}>
          Home page
        </Link>
      </p>
    </div>
  );
}