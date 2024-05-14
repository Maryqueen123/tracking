import React from 'react'
import Governor from '../assets/Governor.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Home() {

  return (
    <>
    
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src="../src/assets/airport.jpg" class="d-block w-100"style={{height:400}} alt="img"/>
    <div class="carousel-caption d-none d-md-block">
         <h3 className='text-light'>Welcome To Anambra State.</h3>
         <p style={{fontSize:'20px'}}>Are you finding it difficult<br /> to adapt in Anambra?<br />Are you facing any kind of Challenges? <br />Do well to reach out to us.</p>
           <div className="align-content-center">
      
             <a className="btn btn-warning  text-dark  me-3" style={{backgroundColor: '#f5c905d7'}} href='./about' type="submit">About Anambra</a>
             <a className="btn btn-warning text-dark" style={{backgroundColor: '#f5c905d7'}} href='./register' type="submit">Register your complaints</a>
          </div>
       </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src="../src/assets/house.jpg" class="d-block w-100"style={{height:400}} alt="img"/>
    <div class="carousel-caption d-none d-md-block">
    <h3 className='text-light'>Anambra State Light of the Nation.</h3>
  <p style={{color:'white', fontSize:'20px'}}>Delight your senses with our  flavourable<br /> environment, warm atmosphere, and <br />impeccable service. Join us for a <br />memorable adventure today.</p>
  <div className="align-content-center">
      <a className="btn btn-warning text-light" style={{backgroundColor: '#f5c905d7'}} href='./register' type="submit">Complaints</a>
  </div>
  </div>
  </div>
  <div class="carousel-item" data-bs-interval="2000">
    <img src="../src/assets/icc.jpg" class="d-block w-100"style={{height:400}} alt="img"/>
    
    <div class="carousel-caption d-none d-md-block">
    <h3 className='text-light'>Anambra State Light of the Nation.</h3>
  <p style={{color:'white', fontSize:'20px'}}>Anambra State is a wonderful place to be; <br /> Join us for a memorable adventure today</p>
  <div className="align-content-center">
      <a className="btn btn-warning text-light" style={{backgroundColor: '#f5c905d7'}} href='./register' type="submit">Complaints</a>
  </div>
  </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  
<div className="container mt-3 pt-3">
<div className="row pt-0 mt-0" >
    <div className="col-md-6" >
      <img src={Governor} className='img-fluid rounded' alt="" />
    </div>

    <div className="col-md-6" >
      <h1 className='text-dark'>DEVELOPING ANAMBRA STATE</h1>
      <h2>Provide us with your Complains</h2>
      <p>Governor Chukwuma Charles Soludo is here to make Anambra State better and to make Ndi Anambra happy. He can serve you better if you are able to logde in your complaints. He can not be everywhere at a time.</p>
      <a href="" className="btn btn-warning">Complaints</a>
    </div>
  </div>
</div>


    </>
  )
}

export default Home