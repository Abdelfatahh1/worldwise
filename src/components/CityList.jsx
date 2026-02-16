import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
function CityList() {
  const { cities } = useCities();

  return (
    <ul className={styles.cityList}>
      {cities.map((e, i) => {
        return <CityItem city={e} key={i}></CityItem>;
      })}
    </ul>
  );
}
export default CityList;
