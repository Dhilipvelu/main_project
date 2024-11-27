import { Link } from "react-router-dom";
import reelvideo from "./images/kabaddi.mp4"
import Mysidebar from "./Sidebar";
import profilepic from "./images/king.jpg"
import { BsBookmark } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";







function Myreels(){

    const [isLiked,setIsLiked]=useState(false)
    const toggleLike = () => {
      setIsLiked(!isLiked);
    };

    return(
        <>
        <div className="row">
            <div className="col-2">
                <Mysidebar/>
            </div>
            <div className="col-10 mt-5 reel">
                <div className="row">
                    <div className="col">
                        <video  controls src={reelvideo} height="600" width="350"></video>
                        <Link href="">
                            <img src={profilepic} alt="" />
                        </Link>
                        <div className="row reelid">
                            <a  href="#">lovely__dhilip.</a>
                            <a  href="#">Follow</a>
                        </div>
                        <div className="row reelicon">
                         
                            <a href="#" style={{
                                fontSize: '20px',
                                color: isLiked ? 'red' : 'white',
                                cursor: 'pointer',
                              }} onClick={toggleLike}> <FaRegHeart /></a>
                        
                            <a href="">20k</a>
                            <a href=""><BsChat /></a>
                            <a href="">210</a>
                            <a href=""><IoPaperPlaneOutline /></a>
                            <a href="">200k</a>

                            <a href=""><BsBookmark /></a>
                            <a href=""><FiMoreHorizontal /></a>
                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col">
                        <video controls src={reelvideo} height="600" width="350"></video>
                        <Link href="">
                            <img src={profilepic} alt="" />
                        </Link>
                        <div className="row reelid">
                            <a  href="#">lovely__dhilip.</a>
                            <a  href="#">Follow</a>
                        </div>
                        <div className="row reelicon">
                            <a href="#" style={{
                                fontSize: '20px',
                                color: isLiked ? 'red' : 'white',
                                cursor: 'pointer',
                              }} onClick={toggleLike}><FaRegHeart /></a>
                            <a href="#">20k</a>
                            <a href="#"><BsChat /></a>
                            <a href="#">210</a>
                            <a href="#"><IoPaperPlaneOutline /></a>
                            <a href="#">200k</a>

                            <a href="#"><BsBookmark /></a>
                            <a href="#"><FiMoreHorizontal /></a>
                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col">
                        <video controls src={reelvideo} height="600" width="350"></video>
                        <Link href="#">
                            <img src={profilepic} alt="" />
                        </Link>
                        <div className="row reelid">
                            <a  href="#">lovely__dhilip.</a>
                            <a  href="#">Follow</a>
                        </div>
                        <div className="row reelicon">
                            <a href="#" style={{
                                fontSize: '20px',
                                color: isLiked ? 'red' : 'white',
                                cursor: 'pointer',
                              }} onClick={toggleLike}><FaRegHeart /></a>
                            <a href="#">20k</a>
                            <a href="#"><BsChat /></a>
                            <a href="#">210</a>
                            <a href="#"><IoPaperPlaneOutline /></a>
                            <a href="#">200k</a>

                            <a href="#"><BsBookmark /></a>
                            <a href="#"><FiMoreHorizontal /></a>
                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col">
                        <video controls src={reelvideo} height="600" width="350"></video>
                        <Link href="">
                            <img src={profilepic} alt="" />
                        </Link>
                        <div className="row reelid">
                            <a  href="#">lovely__dhilip.</a>
                            <a  href="#">Follow</a>
                        </div>
                        <div className="row reelicon">
                            <a href="#" style={{
                                fontSize: '20px',
                                color: isLiked ? 'red' : 'white',
                                cursor: 'pointer',
                              }} onClick={toggleLike}><FaRegHeart /></a>
                            <a href="#">20k</a>
                            <a href="#"><BsChat /></a>
                            <a href="#">210</a>
                            <a href="#"><IoPaperPlaneOutline /></a>
                            <a href="#">200k</a>

                            <a href=""><BsBookmark /></a>
                            <a href=""><FiMoreHorizontal /></a>
                        </div>

                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col">
                        <video controls src={reelvideo} height="600" width="350"></video>
                        <Link href="">
                            <img src={profilepic} alt="" />
                        </Link>
                        <div className="row reelid">
                            <a  href="#">lovely__dhilip.</a>
                            <a  href="#">Follow</a>
                        </div>
                        <div className="row reelicon">
                            <a href="#" style={{
                                fontSize: '20px',
                                color: isLiked ? 'red' : 'white',
                                cursor: 'pointer',
                              }} onClick={toggleLike}><FaRegHeart /></a>
                            <a href="#">20k</a>
                            <a href="#"><BsChat /></a>
                            <a href="#">210</a>
                            <a href="#"><IoPaperPlaneOutline /></a>
                            <a href="#">200k</a>

                            <a href="#"><BsBookmark /></a>
                            <a href="#"><FiMoreHorizontal /></a>
                        </div>

                    </div>

                </div>
                

            </div>
        </div>
        
        </>
    )
}

export default Myreels;