import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo></Logo>
      <NavLinks></NavLinks>
    </header>
  );
}
export default Header;
