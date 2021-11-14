import "./App.css";
import { WeatherProvider } from "./Context/WeatherContext";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </WeatherProvider>
  );
}

export default App;
