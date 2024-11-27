import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { PiPlayBold  } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { LuActivitySquare } from "react-icons/lu";
import { FiBookmark } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


import "./login.css"







// import Model from 'react-model' 
import { useState } from "react";
import './createprofile.css'
import './more.css'


function Mysidebar(){

    const [visible,SetVisible]=useState(false)
    const [showMore,setshowMore]=useState(false)

    const togglePopup = () =>{
        SetVisible(!visible)
        document.body.style.overflowY='hidden'
    }
    const closepopu = () =>{
        SetVisible(!togglePopup)
        document.body.style.overflowY='auto'
    }
    const togglemorepopup = () =>{
        setshowMore(!showMore)
    }
    
    
        
    return(
        <>
 
                <div className="sidebar">
                    <ol className="nav flex-column">
                        <li className="nav-items ps-4">
                            <Link to="/" className="nav-links" ><FaInstagram />Instagram</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/home" className="nav-links" ><GoHomeFill /> Home</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Search" className="nav-links" ><FiSearch /> Search</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Explore" className="nav-links" ><FaRegCompass /> Explore</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Reels" className="nav-links" ><FaClapperboard /> Reels</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Message" className="nav-links" ><LuMessageCircle /> Message</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Notification" className="nav-links" ><FaRegHeart /> Notification</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link className="nav-links" onClick={togglePopup} ><FaRegPlusSquare /> Create</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link to="/Profile" className="nav-links" ><FaRegUserCircle />
                            Profile</Link>
                        </li>
                        <li className="nav-items ps-4">
                            <Link className="nav-links" onClick={togglemorepopup} ><IoMenu /> More</Link>
                        </li>


                    </ol>
                    <Outlet />
                </div>

                {visible &&(

                    <>

                    <div className="popup">
                        <div className="popup-window">
                            <p className="image-icon"><CiImageOn />
                            </p>
                            <span className="video-icon"><PiPlayBold /></span>
                            <p>Drag photos and videos here</p>
                            <button className="fileselect-btn">Select from computer</button>
                            <p className="close-icon" onClick={closepopu}>&#x2716;</p>
                
                        </div>
                    </div>
                </>
                )
                }

                {showMore &&(
                    <>


                    <div className="morepopup">
                        <div className="more-items">
                            <Link className="mt-3"><IoMdSettings/>Setting</Link>
                            <Link ><LuActivitySquare />Your activity</Link>
                            <Link ><FiBookmark />Saved</Link>
                            <Link><GoMoon />Switch appearence</Link>
                            <Link className="mb-2"><TbMessageReport />Report a problem</Link>
                            <hr />
                            <Link>Switch account</Link>
                            <hr className="mt-1" />
                            <Link to="/">Login</Link>
                            <p className="close" onClick={togglemorepopup}>&#x2716;</p>


                        </div>
                    </div>
                    </>
                )}

               
               
        
        
        
        </>
    )
}

export default Mysidebar;