import Profileimage from "./images/Dog.jpg";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./notification.css"





function Mypost(){
 
    return(
        <>
        <div className="row notification">
                        <div className="col-2"></div>
                        <div className="col-6 notificationimage">
                            <img src={Profileimage} alt="" />
                        </div>
                        <div className="col-3 comments">
                            <div className="row commentsec">
                                <div className="col-2 p-0">
                                    <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                    <Link>lovely__dhilip</Link>
                                    <p>chennai,Tamilnadu</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2 ">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-2 p-0">
                                        <Link><img src={Profileimage} alt="" /></Link>
                                </div>
                                <div className="col comments1">
                                        <Link>lovely__dhilip</Link>
                                        <p>🤩🤩🤩</p>
                                        <Link style={{fontSize:"12px",marginTop:"-10px",position:"absolute"}}>1 Like <span style={{marginLeft:"15px"}}>reply</span></Link>
                                 </div>
                            </div>


                        </div>
                        <p className="closebtn"><Link to="/profile"><IoClose/></Link></p>

                    </div>
        
        </>
    )
}

export default Mypost;