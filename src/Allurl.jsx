import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mysearch from "./Search";
import Summa from "./Home";
import Myexplore from "./Explore";
import Myreels from "./reels";
import Mymessages from "./message";
import MyNotification from "./notification";
import Myprofile from "./profile";
import Mylogin from "./login";

function Myurl(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Summa/> }></Route>
                <Route path="/Search" element={<Mysearch/>}></Route>
                <Route path="/Explore" element={<Myexplore/>}></Route>
                <Route path="/Reels" element={<Myreels/>}></Route>
                <Route path="/message" element={<Mymessages/>}></Route>
                <Route path="/notification" element={<MyNotification/>}></Route>
                <Route path="/profile" element={<Myprofile/>}></Route>
                <Route path="/" element={<Mylogin/>}></Route>

                </Routes>
        </BrowserRouter>
        </>
    )
}

export default Myurl;