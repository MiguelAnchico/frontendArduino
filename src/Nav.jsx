import { Link } from "react-router-dom";

export const Nav = () => {
    return(
        <div>
            <Link to="/Devices">Dispositivo 1</Link>
            <Link to="/Devices1">Dispositivo 2</Link>
            <Link to="/Devices2">Dispositivo 3</Link>
        </div>
    )
}