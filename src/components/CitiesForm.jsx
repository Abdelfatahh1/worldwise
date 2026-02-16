import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import styles from "./CitiesForm.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
function CitiesForm() {
  const { cities, dispatch, cityMarker, fetchCityInf } = useCities();
  const [date, setDate] = useState(null);
  const [note, setNote] = useState("");
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    fetchCityInf(lat, lng, "form");
  }, [lat, lng]);
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="">City name</label>
        <input type="text" value={cityMarker.state}></input>
      </div>
      <div>
        <label htmlFor="">When did you go to Mani?</label>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          type="date"
        ></input>
      </div>
      <div>
        <label htmlFor="">Notes about your trip to Mani</label>
        <textarea onChange={(e) => setNote(e.target.value)}></textarea>
      </div>
      <div className={styles.formBtns}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "cities/created",
              payload: {
                ...cityMarker,
                position: { lat, lng },
                id: Date.now(),
              },
            });

            navigation("/applayout/cities");
          }}
        >
          Add
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigation("/applayout/cities");
          }}
        >
          Back
        </Button>
      </div>
    </form>
  );
}
export default CitiesForm;
