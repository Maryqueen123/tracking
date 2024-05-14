import React from 'react'
import Footer1 from '../assets/Footer1.jpg'
import Footer2 from '../assets/Footer2.jpg'
import Footer3 from '../assets/Footer3.jpg'
import Footer4 from '../assets/Footer4.jpg'

function Footer() {
  return (
    <>
<div className="bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>ANAMBRA STATE</h4>
              <p>Anambra State whose slogan is  <a href="" className='text-warning text-decoration-none'>"Light of the Nation"</a> is a
state that has a wonderful Governor who has the interest of his youth at heart and is ever ready to invest in them.</p>
            </div>
            <div className="col-md-3">
              <h4>QUICK LINKS</h4>
              <ul className='list-unstyled'>
                <li><a href="/" className='text-light text-decoration-none'>Home</a></li>
                <li><a href="./about" className='text-light text-decoration-none'>About</a></li>
                <li><a href="./register" className='text-light text-decoration-none'>Complaints</a></li>
                
              </ul>
            </div>
            <div className="col-md-3 mb-3" >
              <h4>ACHIEVEMENTS</h4>
              <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
             <img src={Footer1} alt="" className='img-fluid rounded'/>  
          </div>
          <div className="flex-grow-1 ms-2">
          <img src={Footer2} alt="" className='img-fluid rounded'/>  
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
           <img src={Footer3} alt="" className='img-fluid rounded'/>  
          </div>
          <div className="flex-grow-1 ms-2">
          <img src={Footer4} alt="" className='img-fluid rounded'/>  
          </div>
        </div>

            </div>
            <div className="col-md-3">
              <h4>OUR NEWSLETTER</h4>
              <p>Sign up today for tips and latest news and
exclusive special offers.</p>
               <input type="email" className='form-control' placeholder='Enter your email here' />
               <button className='btn btn-danger mt-3'>submit</button>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">© MARYQUEEN CONCEPTS 2024 All Right Reserved.</div>
      </div>
      
    </>
  )
}

export default Footer