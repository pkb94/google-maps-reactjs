import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./styles.css";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_ggubSOcrPD8hvWicP2Mf3AzwFN5350I" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}
