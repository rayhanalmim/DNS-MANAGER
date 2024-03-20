import Home from "../Component/Home/Home";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;