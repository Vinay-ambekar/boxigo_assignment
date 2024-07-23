import { Routes, Route } from "react-router-dom";
import MyMoves from "../pages/my_moves/MyMoves";
import MyProfile from "../pages/my_profile/MyProfile";
import GetQoute from "../pages/get_quote/GetQoute";
import Logout from "../pages/logout/Logout";

const RouterNav = () => {
    return (
        <Routes>
            <Route path="/" element={<MyMoves />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/getquote" element={<GetQoute />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
};

export default RouterNav;
