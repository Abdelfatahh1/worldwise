import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import Cities from "../components/Cities";

const CitiesContext = createContext();
const API_KEY = "b53346ba99b8491da65386dc1bdeba35";

const initioalState = {
  cities: [],
  cityData: {},
  cityMarker: {},
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "cities/loaded":
      return { ...state, cities: action.payload };
    case "cities/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case "cities/removed":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "cityData/loaded":
      return { ...state, cityData: action.payload };
    case "cityMarker/loaded":
      return { ...state, cityMarker: action.payload };
    default:
      return state;
  }
}

function CitiesProvider({ children }) {
  const [{ cities, cityData, cityMarker }, dispatch] = useReducer(
    reducer,
    initioalState
  );
  const positions = cities.map((city) => {
    return city.position;
  });

  async function fetchCityInf(lat, lng, type) {
    const data = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`
    );
    const result = await data.json();
    type === "form"
      ? // ? setCityMarker(result.results[0].components)
        dispatch({
          type: "cityMarker/loaded",
          payload: result.results[0].components,
        })
      : dispatch({
          type: "cityData/loaded",
          payload: result.results[0].components,
        });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        dispatch,
        cityData,

        fetchCityInf,
        cityMarker,

        positions,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
export { useCities, CitiesProvider };
