import React from 'react';
import S1 from '../images2/slider1.png';
import S2 from '../images2/slider2.png';
import S3 from '../images2/slider3.png';

export default function Slider() {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={S1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={S2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={S3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}
