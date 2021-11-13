import "./App.css";
import { WeatherProvider } from "./Context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
      </div>
    </WeatherProvider>
  );
}

export default App;
