import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Selecciona un dispositivo</h1>
      <div className="devices">
        <Link className="selectDevices" to="/Devices">Dispositivo 1</Link>
        <Link className="selectDevices" to="/Devices1">Dispositivo 2</Link>
        <Link className="selectDevices" to="/Devices2">Dispositivo 3</Link>
      </div>
    </div>
  );
}

export default App;
