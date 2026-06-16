

import { First_main } from "../First_div/First_main";
import {NavBar} from "../NavBar/NavBar"; 
import Home from "../../public/Home3.png"
import { Second_div } from "../First_div/second_div/second_div";
import { Third_div } from "../First_div/Third_div/Third_div";
import { Fourth_div } from "../First_div/fourth_div/fourth_div";
import { Fifth_div } from "../First_div/Fifth_div/Fifth_div";
import { Sixth_div } from "../First_div/sixth_div/sixth_div";





export const DashBoard = () => {

    

    return (
        <div className="w-screen overflow-x-hidden min-h-screen main_div"  >
            {/* <img src={Home} alt="Home" className=" absolute inset-0 w-full h-full object-cover" /> */}

        {console.log(window.innerWidth)}
<NavBar />
{/* <Second_div />
 <First_main /> */}
            {/* <Second_div /> */}
            <Sixth_div />
            
            {/* <h1>asddf</h1>

            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, assumenda? Ratione corporis tempora officiis error ducimus? Reiciendis a et saepe cumque delectus veniam provident magni deserunt, amet neque quas pariatur.</h2> */}
        </div>
    );
}         

{/* <NavBar />
            <First_main />
            <Second_div />
            {/* <Third_div />
            <div className="w-full h-screen"></div> */}
            {/* <div className="w-full h-[100vh] bg-black"></div> */}

            // <Fourth_div />
                
            // <div className="w-full h-screen bg-white"></div>
            // <div className="w-full h-screen bg-white"></div>
            // {/* <div className="w-full h-screen bg-white"></div> */}
            // <div className="w-full h-screen bg-white"></div>
            // <div className="w-full h-screen bg-white"></div>
            // <Fifth_div /> */}