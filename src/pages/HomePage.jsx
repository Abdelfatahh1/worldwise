import Header from "../components/Header";
import styles from "./HomePage.module.css";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
function HomePage() {
  const { cities } = useCities();
  console.log(cities);
  return (
    <main className={styles.home}>
      <Header></Header>
      <section>
        <h1>You travel the world. WorldWise keeps track of your adventures.</h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <NavLink to="/login">
          <Button>Start tracking now</Button>
        </NavLink>
      </section>
    </main>
  );
}

export default HomePage;
