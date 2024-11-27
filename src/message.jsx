import { Link } from "react-router-dom";
import Mysidebar from "./Sidebar";
import noteimage from "./images/king.jpg"
import { FaFacebookMessenger } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { RiInformation2Line } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";




import './message.css'
import './msg1.css'
import { useState } from "react";
// import Chat1 from "./msg1";


function Mymessages(){
    const [ischat,setChat]=useState(false)
    const chat1=()=>{
        setChat(true)
    }


    return(
        <>
            <div className="row ">
                <div className="col-2">
                    <Mysidebar/>
                </div>
                <div className="col-3 messagebar">
                    <div className="row noteimage mt-5">
                        <div className="col-3">
                            <Link href="#">
                                <img src={noteimage} alt=""/>
                            </Link>
                            <p className="online"></p>
                            <Link className="idname">lovely__dhilip</Link>
                            

                        </div>
                        <div className="col-3">
                            <Link href="#">
                                <img src={noteimage} alt="" />
                            </Link>
                            <p className="online"></p>
                            <Link className="idname">lovely__dhilip</Link>
                        </div>
                        <div className="col-3">
                            <Link href="#">
                                <img src={noteimage} alt="" />
                            </Link>
                            <p className="online"></p>
                            <Link className="idname">lovely__dhilip</Link>
                        </div>
                        <div className="col-3">
                            <Link href="#">
                                <img src={noteimage} alt="" />
                            </Link>
                            <p className="online"></p>
                            <Link className="idname">lovely__dhilip</Link>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <Link className="title">Messages</Link>
                        </div>
                        <div className="col">
                            <Link className="msgrequest">Request(1)</Link>
                        </div>
                    </div>
                    <div className="row msgid mt-3"onClick={chat1}> 
                    
                            <div className="col-2 msgimage" >
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link  className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link  className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                    <div className="row msgid mt-3" onClick={chat1}>
                    
                            <div className="col-2 msgimage">
                                <Link href="#"><img src={noteimage} alt="" /></Link>
                            </div>
                            <div className="col">
                                <Link className="id">Sundarapandiyan <br /><span className="active">Active 10m ago</span></Link>
                            </div>
                    </div>
                        
                </div>
                <div className="col-7 p-0" >
                    {ischat ? chat1 && (
                            <div className=" chat-container">
                                <div className="sub-container">

                                    <div className="header">
                                        <Link>
                                            <img src={noteimage} alt="" />
                                            <span>
                                                <p>User_name</p>
                                                <p>Active now</p>
                                            </span>
                                        </Link>
                                        <span className="icons">
                                            <Link><IoCall/></Link>
                                            <Link><FaVideo/></Link>
                                            <Link><RiInformation2Line/></Link>
                                        </span>
                                    </div>

                                    <div className=" row chathistory">
                                        <div className=" text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row text">
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                        <div className="row reply">
                                            <div className="col-10"></div>
                                            <div className="col">
                                                <p>Hi da</p>
                                                <p>How are you?</p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="row" >
                                    <div className="col-12 msgbox">
                                        <input type="text" placeholder="Message.."/>
                                        <span>
                                            <Link><IoPaperPlaneOutline/></Link>
                                        </span>
                                    </div>

                                </div>
                                   

                                </div>
                            
    
                            </div>
                        ): (
                            <div className="chatpage">
                            <div className="messangericon"> <FaFacebookMessenger /></div>
                            <p>Your messages</p>
                            <p>Send a message to start a chat.</p>
                            <button>Send message</button>
                        </div>
                            )
                            }
                   

                   

                    
                </div>
                        
                                








  
    

            
            </div>


        </>
    )
}

export default Mymessages;