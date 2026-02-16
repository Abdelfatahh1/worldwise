import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";
import Button from "./Button";
function NavLinks() {
  return (
    <nav>
      <ul className={styles.links}>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
