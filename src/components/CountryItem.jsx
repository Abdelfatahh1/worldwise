import styles from "./CountryItem.module.css";
function CountryItem({ countryName, emoji }) {
  return (
    <li className={styles.CountryItem}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}
export default CountryItem;
