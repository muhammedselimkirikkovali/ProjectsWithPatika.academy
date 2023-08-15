import "./App.css";
import { WeatherProvider } from "./Context/WeatherContext";
import Container from "./components/Container";
function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
