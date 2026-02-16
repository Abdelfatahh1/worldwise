import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <NavLink to="/" className={styles.logoLink}>
      <img src="./public/logo.png" alt="notfound" />
    </NavLink>
  );
}
export default Logo;
