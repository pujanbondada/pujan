import React from 'react';
import logo1 from '../images/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
         <>
          <div className='col-md-2'>
            <div>
              <img  src={logo1} width={50}/>
               <h2 class="h">Youtube</h2>
            </div>
            <div className='text-center'>
             </div>
            <div className='sidebar'>
            <ul>
            <Link to="Home" class="link"><li><i class="fa-solid fa-house"></i>Home</li></Link>
            <br></br>
            <Link to="Shorts" class="link"><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link>
            <br></br>
            <Link to="Subscriptions" class="link"><li><i class="fa-solid fa-credit-card"></i>Subscriptions</li></Link>
            <hr></hr>
            <Link to="Library" class="link"><li><i class="fa-solid fa-book"></i>Library</li></Link>
            <br></br>
            <li><i class="fa-solid fa-clock-rotate-left"></i>History</li>
            <br></br>
            <li><i class="fa-regular fa-clock"></i>Watch Later</li>
            <br></br>
            <li><i class="fa-regular fa-thumbs-up"></i>Liked videos</li>
            <br></br>
            <hr></hr>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

        </div>

         </>
    );
}
export default Sidebar;
