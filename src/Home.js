import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";


function Home() {
    return (
        <div>
          <div className="home">
          <div className="slide">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/April/TataFood/750x375.jpg" class="d-block w-100" alt="max-height: 90% "/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/July_2020/july_coop/fortune_sRange_750x375.jpg" class="d-block  w-100" alt="max-height: 90%"/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPantry/MAY/24Mantra/750x375_Option_1.png" class="d-block w-100" alt="max-height: 100% "/>
      <div class="carousel-caption d-none d-md-block">
      
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>



 

  

<div style={{marginTop:5}} className="row row-cols-1 row-cols-sm-4 g-4" >
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/05_Pulses_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
      <Link to ="/cooking">
    <span  class="btn btn-primary text-wrap">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/06_Spices__Masala_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/nuts">
    <span class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/07Tea__Coffee_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/beverages">
    <span class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/08_Breakfast_Essentials_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/food">
    <span class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div>
</div></div>
<div style={{marginTop:5}} className="row row-cols-1 row-cols-sm-4 g-4" >
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/09_Dry_fruits__Nuts_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/nuts">
    <span  class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/10_Atta__Flour_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/cooking">
    <span  class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/11_Noodles__More_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
    <Link to ="/food">
    <span  class="btn btn-primary">View Details</span>
    </Link>
    </div>
  </div>
</div></div>
<div className='col'>
<div class="card" >
  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Pantry/12_Beverages_400x400.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"></p>
    <div class="d-grid gap-2 col-6 mx-auto">
      <Link to ="/beverages">
    <span  class="btn btn-primary ">View Details</span>
    </Link>
    </div>
  </div>
</div>
</div></div>








</div>
</div>


    )
}

export default Home
