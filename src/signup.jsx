import { Link } from "react-router-dom"
import "./login.css"



function Signup(){
    return(
        <>
    
        <div className="loginpage">
         <div className="login-items">
             <div className="login-list">
                 <h1 style={{paddingTop:"30px"}}>Instagram</h1>
                 <h6 style={{textAlign:"center"}}>Signup to see photos and videos</h6>                               
                 <h6 style={{textAlign:"center"}}>from your friends</h6>     
                 <button>Login with Facebook</button>
                 <hr />
                 <span>OR</span>
                 <input type="text" placeholder="Mobile number or email" required/>
                 <input type="text" placeholder="Full name" required style={{marginTop:"3px"}}/>
                 <input type="text" placeholder="Username" required style={{marginTop:"3px"}}/>
                 <input type="text" placeholder="Password" required style={{marginTop:"3px"}}/>
                 <Link to="/"><button style={{width:"100%"}}>Signup</button></Link>
                 <p style={{marginTop:"10px",textAlign:"center"}}>Already have an Account?
                         <Link to="/">Login</Link>
                 </p>
              
             </div>
     </div>
             {/* <p className="closebtn"><a href="#"><IoClose/></a></p> */}
     </div>
    )
        </>
    )
}

export default Signup   