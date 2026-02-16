import Button from "./Button";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityData, dispatch } = useCities();
  return (
    <li
      className={`${styles.cityItem} ${
        cityData.id === city.id ? styles.selected : ""
      }`}
    >
      <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
        <div>
          <span>{city["ISO_3166-1_alpha-2"]}</span>
          <span>{city.state}</span>
        </div>
        <div>
          <span>{formatDate(Date.now())}</span>
        </div>
      </Link>
      <Button
        onClick={() => {
          dispatch({ type: "cities/removed", payload: city.id });
        }}
      >
        ×
      </Button>
    </li>
  );
}
export default CityItem;
// المشكله في اختلاف ال objects المتخزنه في ال cities array عشان باعت object مختلف من ال cityform وداعيه بشكل مختلف هنا
