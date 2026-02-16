import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ClickHandler from "./ClickHandler";
import Button from "./Button";
import styles from "./Map.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { positions, cityData } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { isLoading, position, error, getPosition, setPosition } =
    useGeolocation();
  console.log(position, "position from hook");
  return (
    <div onClick={(e) => {}} className={styles.map}>
      <MapContainer
        className={styles.mapContainer}
        center={[5, 10]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ClickHandler
          setSearchParams={setSearchParams}
          setPosition={setPosition}
        />

        <>
          {positions.map((pos) => {
            return (
              <Marker
                position={Object.values(pos).map((number) => Number(number))}
                key={pos}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </>
        {(lat && lng) || (position.lat && position.lng) ? (
          <MoveMapToPosition
            lat={position.lat ? position.lat : lat}
            lng={position.lng ? position.lng : lng}
          />
        ) : null}
      </MapContainer>
      <Button onClick={getPosition} type={position.lat ? "position" : ""}>
        {isLoading ? "Loading..." : "Use your location"}
      </Button>
    </div>
  );
}
function MoveMapToPosition({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], map.getZoom(), {
    animate: true,
  });

  return null; // component doesn't render anything
}

export default Map;
