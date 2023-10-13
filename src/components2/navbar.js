import React from 'react';
import Logo from '../images2/lpgo.png';
export default function Navbar() {
  return (
    <>
    <div class="col-md-2">
    <img src={Logo} class="img1" />
    </div>
    <div class="col-md-5 ">
     <input type="text" placeholder='Search for products and more' class="searchbar"/>
    </div>
    <div class="col-md-5 nav">
       
       <ul>
        <li class="l1"><i class="fa-solid fa-store"></i> Become a seller</li>
        <li class="l2"><i class="fa-regular fa-user"></i> Sign in <i class="fa-solid fa-angle-down"></i></li>
        <li class="l2"><i class="fa-solid fa-cart-shopping"></i> Cart</li>
        <li class="l4"><i class="fa-solid fa-ellipsis-vertical"></i></li>
       </ul>
    </div>
    </>
  )
}
