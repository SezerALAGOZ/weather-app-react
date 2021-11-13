import "./App.css";
import { WeatherProvider } from "./Context/WeatherContext";
import Deneme from "./components/Deneme";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Deneme />
      </div>
    </WeatherProvider>
  );
}

export default App;
