import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"

               
 function Mylogin(){
    // const [login,Setlogin] = useState(false)
    // const loginpage = ()=> {
    //     Setlogin(!login)
    //     document.body.style.overflowY='hidden'
        
    // }
    // const togglelogin = () =>{
    //     Setlogin(true)
    // }
    // const closelogin = () =>{
    //     Setlogin(!loginpage)
    //     document.body.style.overflowY='auto'
    // }


    const [Isvalue,Setvalue]=useState("")
    const[Ispassword,Setpassword]=useState("")
    const navigate=useNavigate();

    const Myusername = "username"
    const Mypassword = "password"

    
    return(
    <>
    {/* {login ? ( */}
        <div className="loginpage">
        <div className="login-items">
            <div className="login-list">
                <h1 >Instagram</h1>
                <input type="text" placeholder="Phone number, username,or email" onInput={(e)=>{
                    Setvalue(e.target.value)
                }}/>
                <input type="password" placeholder="password" required onInput={(f)=>{
                    Setpassword(f.target.value)
                }}/>
                <button type="submit" required onClick={()=>{
                    if (Isvalue === Myusername && Ispassword ===Mypassword)
                    {
                        alert("Login Successfully")
                        navigate("/home")
                    }
                    else if (Isvalue ==="" && Ispassword ==="")
                    {
                        alert("Please Enter your Username and password")
                    }
                    else{
                        alert("Username or password is incorrect")
                    }
                    
                     
                    
                    
                    }}>Login</button>
                <hr />
                <span>OR</span>
                <button onClick={()=>{
                    localStorage.clear()
                }}>Login with facebook</button>
                <div className="row mt-3">
                    <div className="col" style={{textAlign:"center"}}>
                        <Link>Forgot Password?</Link>
                    </div>
                </div>
                <div className="row account ">
                    <div className="col" style={{textAlign:"center"}}>
                        <p>Don't have an account? <Link >Sign up</Link></p>
                    </div>
                </div>
                                                        
            </div>



        </div>
            {/* <p className="closebtn"><a href="#"><IoClose/></a></p> */}
    </div>

    
    {/* :(
        <div className="loginpage">
         <div className="login-items">
             <div className="login-list">
                 <h1 style={{marginBottom:"20px"}}>Instagram</h1>
                 <h6 style={{textAlign:"center"}}>Signup to see photos and videos</h6>                               
                 <h6 style={{textAlign:"center"}}>from your friends</h6>     
                 <button>Login with Facebook</button>
                 <hr />
                 <span>OR</span>
                 <input type="text" placeholder="Mobile number or email" required/>
                 <input type="text" placeholder="Full name" required style={{marginTop:"3px"}}/>
                 <input type="text" placeholder="Username" required style={{marginTop:"3px"}}/>
                 <input type="text" placeholder="Password" required style={{marginTop:"3px"}}/>
                 <button>Signup</button>
                 <p style={{marginTop:"20px",textAlign:"center"}}>Already have an Account?
                         <Link>Login</Link>
                 </p>
              
             </div>
     </div>
             {/* <p className="closebtn"><a href="#"><IoClose/></a></p> */}
     {/* </div> */}
    {/* ) */}
    </>
    
                           
    

)}
export default Mylogin