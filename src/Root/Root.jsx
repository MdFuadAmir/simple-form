import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Root = () => {
    return (
        <div className="max-7xl mx-auto">
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;