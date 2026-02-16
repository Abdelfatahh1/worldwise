import Logo from "./Logo";
import Button from "./Button";
import styles from "./Cities.module.css";
import CitiesForm from "./CitiesForm";
import CityList from "./CityList";
import CountryList from "./CountryList";
import CityInf from "./CityInf";
import { NavLink, Outlet } from "react-router-dom";

function Cities() {
  return (
    <section className={styles.cities}>
      <Logo></Logo>
      <div className={styles.btns}>
        <Button>
          <NavLink to="cities">CITIES</NavLink>
        </Button>
        <Button>
          <NavLink to="countries">COUNTRIES</NavLink>
        </Button>
      </div>
      <article>
        <Outlet></Outlet>
      </article>
    </section>
  );
}

export default Cities;
