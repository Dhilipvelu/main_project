import { Link } from "react-router-dom";
import Mysidebar from "./Sidebar";
import Profileimage from "./images/Dog.jpg";
import suriya from "./images/suriya.jpeg";
import vikram from "./images/vikram.jpeg";
import ajith from "./images/ajith.jpeg";
import vijay from "./images/Vijay.jpeg";
import vijaysethupathi from "./images/vijaysethupathi.jpeg";
import rajini from "./images/rajini.jpeg";
import kamal from "./images/kamal.jpeg";
import "./profile.css";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


function Myprofile() {
  const [highlightvisible, sethighlight] = useState(false);
  const highlightvideo = () => {
    sethighlight(!highlightvisible);
    document.body.style.overflowY='hidden';
};
    const closevideo = () => {
    sethighlight(!highlightvideo);
    document.body.style.overflowY='auto';
};
const [isntoification,Setnotification]=useState(false)
    const toggleimage=()=>{
        Setnotification(!isntoification)
    }
  return (
    <>
      <div className="row">
        <div className="col-2">
          <Mysidebar />
        </div>
        <div className="col-1"></div>
        <div className="col-8">
          <div className="row mt-3">
            <div className="col-3 profilepic p-0">
              <img src={Profileimage} alt="" />
            </div>
            {/* <div className="col-1"></div> */}
            <div className="col-7">
              <div className="row mt-2">
                <div className="col-3  p-0">
                  <Link href="#">lovely__dhilip</Link>
                </div>
                <div className="col-3 p-0">
                  <Link href="#" className="edit">
                    Edit profile
                  </Link>
                </div>
                <div className="col-3 p-0">
                  <Link href="#" className="archive">
                    View Archieve
                  </Link>
                </div>
                <div className="col-1 setting">
                  <Link href="#">
                    <IoMdSettings />
                  </Link>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-8 postfollower p-0">
                  <Link href="#">9 posts</Link>
                  <Link href="#">1000 followers</Link>
                  <Link href="#">100 following</Link>
                </div>
              </div>
              <div className="row mt-2">
                <div
                  className="col p-0"
                  style={{ color: "black", fontFamily: "cursive" }}
                >
                  Dhilip the Creator
                </div>
              </div>
              <div className="row pt-1">
                <div
                  className="col p-0"
                  style={{ color: "black", fontFamily: "cursive" }}
                >
                  Software Developer
                </div>
              </div>
              <div className="row pt-1">
                <div
                  className="col p-0"
                  style={{ color: "black", fontFamily: "cursive" }}
                >
                  HTML
                </div>
              </div>
              <div className="row pt-1">
                <div
                  className="col p-0"
                  style={{ color: "black", fontFamily: "cursive" }}
                >
                  React
                </div>
              </div>
              <div className="row pt-1">
                <div
                  className="col p-0"
                  style={{ color: "black", fontFamily: "cursive" }}
                >
                  Python
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 highlights p-0">
              <Link>
                <img
                  src={Profileimage}
                  alt="Hightlight"
                  onClick={highlightvideo}
                />
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo} />
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo}/>
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo}/>
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo}/>
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo}/>
              </Link>
              <Link>
                <img src={Profileimage} alt="Hightlight" onClick={highlightvideo}/>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <hr />
          </div>

          <div className="row postreel">
            <div className="col-4"></div>
            <div className="col-4 postreelsaved">
              <Link href="#">posts</Link>
              <Link href="#">Saved</Link>
              <Link href="#">Tagged</Link>
            </div>
            <div className="col-4"></div>
          </div>

          <div className="row mt-3">
            <div className="col postimages p-0">
              <Link>
                <img  onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
              <Link>
                <img onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
              <Link>
                <img  onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col postimages p-0">
              <Link>
                <img onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
              <Link>
                <img  onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
              <Link>
                <img onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col postimages p-0">
              <Link>
                <img onClick={toggleimage}  src={Profileimage} alt="" />
              </Link>
              <Link>
                <img  onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
              <Link>
                <img  onClick={toggleimage} src={Profileimage} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>

      {highlightvisible && (
        <>
          <div id="mycarousel" className="carousel slide highlightitems ">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={suriya} alt=" Storyimage" />
              </div>
              <div className="carousel-item ">
                <img src={vikram} alt=" Storyimage" />
              </div>
              <div className="carousel-item">
                <img src={ajith} alt=" Storyimage" />
              </div>
              <div className="carousel-item ">
                <img src={vijay} alt=" Storyimage" />
              </div>
              <div className="carousel-item">
                <img src={vijaysethupathi} alt=" Storyimage" />
              </div>
              <div className="carousel-item ">
                <img src={rajini} alt=" Storyimage" />
              </div>
              <div className="carousel-item">
                <img src={kamal} alt=" Storyimage" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <p className="closebtn" onClick={closevideo}><a href="#"><IoClose/></a></p>
  
        </>
      )}

{isntoification &&(
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
                        <p className="closebtn" onClick={toggleimage}><a href="#"><IoClose/></a></p>

                    </div>
                    
                    </>

                )}
    </>
  );
}
export default Myprofile;
