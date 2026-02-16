import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
function CountryList() {
  const { cities } = useCities();
  const countries = cities.reduce((arr, curr) => {
    if (!arr.map((e) => e.countryName).includes(curr.country)) {
      arr.push({ countryName: curr.country, emoji: curr.emoji });
    }
    return arr;
  }, []);
  console.log(countries, "ccccc");
  return (
    <ul className={styles.country}>
      {countries.map((e, i) => {
        return (
          <CountryItem
            countryName={e.countryName}
            emoji={e.emoji}
            key={i}
          ></CountryItem>
        );
      })}
    </ul>
  );
}
export default CountryList;
