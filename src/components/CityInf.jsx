import styles from "./CityInf.module.css";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
function CityInf() {
  const navigation = useNavigate();
  const { cityData, fetchCityInf } = useCities();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    fetchCityInf(lat, lng, "inf");
  }, [lat, lng]);

  return (
    <div className={styles.cityInf}>
      <div>
        <span>CITY NAME</span>
        <h1>{cityData.state}</h1>
      </div>
      <div>
        <span>You went to {cityData.state}</span>
        <h1>Sunday, November 23, 2025</h1>
      </div>
      <div>
        <span>Learn more</span>
        <a>Check out Malagon on Wikipedia →</a>
      </div>
      <button onClick={() => navigation(-1)}>← Back</button>
    </div>
  );
}
export default CityInf;
