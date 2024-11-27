import { Link } from "react-router-dom";
import storyimage from "./assets/demo.png";
import postvideo from "./images/video.mp4";
import Mysidebar from "./Sidebar";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { useState,useEffect } from "react";
import './Home.css'
import suriya from "./images/suriya.jpeg";
import vikram from "./images/vikram.jpeg";
import ajith from "./images/ajith.jpeg";
import vijay from "./images/Vijay.jpeg";
import vijaysethupathi from "./images/vijaysethupathi.jpeg";
import rajini from "./images/Rajini.jpeg";
import kamal from "./images/kamal.jpeg";
import dhanush from "./images/dhanush.jpeg";

import { IoClose } from "react-icons/io5";






function Summa() {

  const[Story,Setstory]=useState(false)
  const togglestoryvideo = () =>{
    Setstory(!Story)
    document.body.style.overflowY='hidden'
  }
  const closetoggle =() =>{
    Setstory(!togglestoryvideo)
    document.body.style.overflowY='auto'
  }
  const [isLiked,setIsLiked]=useState(false)
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Mysidebar />
        </div>

        <div className="col-6">
          <div className="row mt-3 storycolumn">
            <div className="col-1 storyimg">
              <Link href="">
                <img src={suriya} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user1_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={vijay} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user2_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={vijaysethupathi} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user3_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={kamal} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user4_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={rajini} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user5_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={dhanush} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user6_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={vikram} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user7_</p>
              </Link>
            </div>
            <div className="col-1 storyimg">
              <Link href="">
                <img src={ajith} onClick={togglestoryvideo} alt="" height="50px" width="50px" />
                <p>_user8_</p>
              </Link>
            </div>
              {/* <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link>
              <Link href="" className="ms-3">
                <img src={storyimage} alt="" height="50px" width="50px" />
              </Link> */}
          </div>

          <div className="row mt-5 post">
            <div className="col-1"></div>
            <div className="col-1 p-0">
              <a href="">
                <img src={vijay} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}}/>
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="">...</a>
            </div>
          </div>
          <div className="row postvideo">
            <div className="col-1"></div>
            <div className="col-3 mt-4 ms-5" onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={vijay} alt=""  />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span 
                        style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.{" "}
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 ps-0 mt-2 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>

          <div class="row post">
            <div className="col-1"></div>
            <div className="col-1 ps-0">
              <a href="">
                <img src={suriya} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}} />
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="#">...</a>
            </div>
          </div>
          <div className="row postvideo ">
            <div className="col-1"></div>
            <div className="col-6 ms-5 mt-4 " onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={suriya} alt="" />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 mt-2  ps-0 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row commentbox">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>
          <div class="row post">
            <div className="col-1"></div>
            <div className="col-1 ps-0">
              <a href="">
                <img src={dhanush} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}} />
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="">...</a>
            </div>
          </div>
          <div className="row postvideo ">
            <div className="col-1"></div>
            <div className="col-6 ms-5 mt-4 " onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={dhanush} alt="" />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 mt-2  ps-0 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row commentbox">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>
          <div class="row post">
            <div className="col-1"></div>
            <div className="col-1 ps-0">
              <a href="#">
                <img src={vikram} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}} />
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="">...</a>
            </div>
          </div>
          <div className="row postvideo ">
            <div className="col-1"></div>
            <div className="col-6 ms-5 mt-4 " onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={vikram} alt="" />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 mt-2  ps-0 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row commentbox">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>
          <div class="row post">
            <div className="col-1"></div>
            <div className="col-1 ps-0">
              <a href="">
                <img src={kamal} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}} />
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="">...</a>
            </div>
          </div>
          <div className="row postvideo ">
            <div className="col-1"></div>
            <div className="col-6 ms-5 mt-4 " onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={kamal} alt="" />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 mt-2  ps-0 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row commentbox">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>
          <div class="row post">
            <div className="col-1"></div>
            <div className="col-1 ps-0">
              <a href="">
                <img src={ajith} alt="" height="50px" width="50px" style={{objectFit:"contain",border:"1px solid gray"}} />
              </a>
            </div>
            <div className="col-6 ps-0 ms-0">
              <Link to="/profile">lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>

            </div>
            <div className="col mt-3 ms-3">
              <a href="">...</a>
            </div>
          </div>
          <div className="row postvideo ">
            <div className="col-1"></div>
            <div className="col-6 ms-5 mt-4 " onDoubleClick={toggleLike} style={{cursor:"pointer",width:"100%"}}>
              <img src={ajith} alt="" />
            </div>
            <div className="col"></div>
          </div>
          <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8 ps-0 likes">
                      <span style={{
                          fontSize: '20px',
                          color: isLiked ? 'red' : 'black',
                          cursor: 'pointer',
                        }}><FaRegHeart /></span>
                      <span className="ms-2" ><LuMessageCircle /></span>
                      <span className="ms-2"><PiPaperPlaneTiltBold /></span>
                      <span><FaRegBookmark /></span>
                    </div>
                    
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col ps-0">26 likes</div>
          </div>
          <div className="row description">
            <div className="col-1"></div>
            <div className="col ps-0">
              <a href="#">lovely__dhilip</a> Enjoy the Nature.
            </div>
          </div>
          <div className="row ">
            <div className="col-1"></div>
            <div className="col-8 mt-2  ps-0 commentbox mb-5">
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
          <div className="row commentbox">
            <div className="col-1"></div>
            <div className="col-8 mt-2">
              <p></p>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <div className="col-4 friendlistimage">
          <div className="row mt-4">
            <div className="col-1">
              <a href="">
                <img src={dhanush} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <Link to="/profile" >lovely__dhilip</Link>
              <br />
              <span style={{fontSize:"15px",fontStyle:"italic"}}>Dhilip</span>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">switch</a>
            </div>
          </div>
          <div className="row friendlistline2">
            <div className="col-7 mt-4">
              <a href="">suggested for u</a>
            </div>
            <div className="col mt-4 ps-3 ">
              <a href="">see all</a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-1">
              <a href="">
                <img src={kamal} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <a href="#">lovely__dhilip</a>
              <br />
              <p style={{fontSize:"13px",fontStyle:"italic"}}>follows you</p>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">follow</a>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <a href="">
                <img src={ajith} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <a href="#">lovely__dhilip</a>
              <br />
              <p style={{fontSize:"13px",fontStyle:"italic"}}>follows you</p>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">follow</a>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <a href="">
                <img src={vijaysethupathi} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <a href="#">lovely__dhilip</a>
              <br />
              <p style={{fontSize:"13px",fontStyle:"italic"}}>follows you</p>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">follow</a>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <a href="">
                <img src={suriya} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <a href="#">lovely__dhilip</a>
              <br />
              <p style={{fontSize:"13px",fontStyle:"italic"}}>follows you</p>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">follow</a>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <a href="">
                <img src={vikram} alt="" />
              </a>
            </div>
            <div className="col ms-2">
              <a href="#">lovely__dhilip</a>
              <br />
              <p style={{fontSize:"13px",fontStyle:"italic"}}>follows you</p>
            </div>
            <div className="col ms-4 ps-4">
              <a href="#">follow</a>
            </div>
          </div>
          <div className="row ms-2">
            <div className="col">
              <a href="#">About.</a>
              <a href="#">Help.</a>
              <a href="#">Press.</a>
              <a href="#">API.</a>
              <a href="#">Jobs.</a>
              <a href="#">Privacy.</a>
              <a href="#">Terms.</a>
            </div>
          </div>
          <div className="row ms-2">
            <div className="col">
              <a href="#">Location.</a>
              <a href="#">Language.</a>
              <a href="#">Meta Verified.</a>
            
            </div>
          </div>
        </div>
      </div>

    
    
    
    {Story &&(
      <>
        {/* <div className="storyitems"> */}
          {/* <div className="storylinks"> */}
            <div id="mycarousel" className="carousel slide storyitems ">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <img src={suriya} alt=" Storyimage"/>
                </div>
                <div className="carousel-item ">
                  <img src={kamal} alt=" Storyimage"/>
                </div>
                <div className="carousel-item">
                  <img src={vijay} alt=" Storyimage"/>
                </div>
                <div className="carousel-item ">
                  <img src={vikram} alt=" Storyimage"/>
                </div>
                <div className="carousel-item">
                  <img src={ajith} alt=" Storyimage"/>
                </div>
                <div className="carousel-item ">
                  <img src={rajini} alt=" Storyimage"/>
                </div>
                <div className="carousel-item ">
                  <img src={dhanush} alt=" Storyimage"/>
                </div>
                <div className="carousel-item">
                  <img src={vijaysethupathi} alt=" Storyimage"/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
                  
            </div>

            {/* <Link className="storyidimage"><img src={storyimage} alt="" /></Link> */}
            {/* <Link className="storyidimage">lovely__dhilip</Link> */}
            {/* <audio controls>
                <source src={Music1} type="audio/ogg" />
              </audio> */}
            {/* <img src={kingimage} alt=" Storyimage"/> */}
            {/* <Link className="storyidimage"><img src={storyimage} alt="" /></Link> */}
            {/* <Link className="storyidimage">lovely__dhilip</Link> */}
            {/* <audio controls>
                <source src={Music1} type="audio/ogg" />
              </audio> */}
            {/* <img src={kingimage} alt=" Storyimage"/>/ */}
            {/* <Link className="storyidimage"><img src={storyimage} alt="" /></Link> */}
            {/* <Link className="storyidimage">lovely__dhilip</Link> */}
            {/* <audio controls>
                <source src={Music1} type="audio/ogg" />
              </audio> */}
          <p className="closebtn" onClick={closetoggle}><a href="#"><IoClose/></a></p>
          {/* </div> */}
        
        {/* </div>  */}
      </>
    )}
    </>
  )
}

export default Summa;
