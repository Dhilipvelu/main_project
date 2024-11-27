import { Link } from "react-router-dom";
import explorevideo from "./images/video.mp4"
import Mysidebar from "./Sidebar";

function Myexplore(){

    return(
        <>
        <div className="row">
            <div className="col-2">
                    <Mysidebar />
                
            </div>
            <div className="col mt-5">
                <div className="row">

                    <div className="col-12 exploreitems">
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        <div className="explorelink"><Link><video controls src={explorevideo} ></video></Link></div>
                        
                    </div>
                </div>
            </div>

        

        </div>
        
        </>
    )
}

export default Myexplore;
