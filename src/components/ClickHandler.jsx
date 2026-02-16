import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

function ClickHandler({ setSearchParams, setPosition }) {
  const navigation = useNavigate();
  useMapEvents({
    click(e) {
      setSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng });
      navigation(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      setPosition({});
    },
  });

  return null;
}
export default ClickHandler;
