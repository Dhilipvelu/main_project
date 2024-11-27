import Mysidebar from "./Sidebar";
import "./notification.css";
import Likedprofile from "./images/king.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



function MyNotification(){
    const [isntoification,Setnotification]=useState(false)
    const toggleimage=()=>{
        Setnotification(!isntoification)
    }
    return(
        <>
        <div className="row">
            <div className="col-2">
                <Mysidebar/>
            </div>
            <div className="col-3 notificationcontent">
                <div className="row">
                    <div className="col">
                        <p style={{fontSize:'20px',fontWeight:'600'}}>Notifications</p>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <p style={{fontWeight:'500'}}>Today</p>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan Liked your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan commented on your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan shared your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 line p-0">
                        <hr/>
                    </div>

                </div>
                <div className="row" onClick={toggleimage}>
                    <p style={{fontWeight:'500'}}>Yesterday</p>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan Liked your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan commented on your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan shared your Photo.</p>
                    </div>
                    <div className="col-1 likedpic">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 line p-0">
                        <hr/>
                    </div>

                </div>
                <div className="row" onClick={toggleimage}>
                    <p style={{fontWeight:'500'}}>This Week</p>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan Liked your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan commented on your Photo.</p>
                    </div>
                    <div className="col-1 likedpic ">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan shared your Photo.</p>
                    </div>
                    <div className="col-1 likedpic">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 line p-0">
                        <hr/>
                    </div>

                </div>
                <div className="row" onClick={toggleimage}>
                    <p style={{fontWeight:'500'}}>Last week</p>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan Liked your Photo.</p>
                    </div>
                    <div className="col-1 likedpic">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan commented on your Photo.</p>
                    </div>
                    <div className="col-1 likedpic">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row" onClick={toggleimage}>
                    <div className="col-1 likedprofile">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                    <div className="col-9">
                        <p className="likecontent">Sundarapandiyan,Manigandan shared your Photo.</p>
                    </div>
                    <div className="col-1 likedpic">
                        <Link href="#"><img src={Likedprofile} alt="" /></Link>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 line p-0">
                        <hr/>
                    </div>

                </div>





            </div>
        </div>

                {isntoification &&(
                    <>
                    <div className="row notification">
                        <div className="col-2"></div>
                        <div className="col-6 notificationimage">
                            <img src={Likedprofile} alt="" />
                        </div>
                        <div className="col-3 comments">
                            <div className="row commentsec">
                                <div className="col-2 p-0">
                                    <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                    <Link>lovely__dhilip</Link>
                                    <p>chennai,Tamilnadu</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2 ">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Likedprofile} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>


                        </div>
                        <p className="closebtn" onClick={toggleimage}><a href="#"><IoClose/></a></p>

                    </div>
                    
                    </>

                )}
        


        </>
    )
}

export default MyNotification