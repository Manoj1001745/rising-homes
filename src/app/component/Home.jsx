"use client"
import React from 'react'
import Slider from './Slider'
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  React.useEffect(() => {
      const counters = document.querySelectorAll(".count");
      const countersQuantity = counters.length;
      const counter = [];
  
      for (let i = 0; i < countersQuantity; i++) {
          counter[i] = parseInt(counters[i].innerHTML);
      }
  
      const count = (start, value, id) => {
          let localStart = start;
          const interval = setInterval(() => {
              if (localStart < value) {
                  localStart++;
                  counters[id].innerHTML = localStart;
              } else {
                  clearInterval(interval);
              }
          }, 70);
      };
  
      for (let j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
      }
      AOS.init();
  }, []);

  return (
    <>
    {/* first page */}
      <section>
        <Slider/>
         <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="overlay">
            <h2 id='title'>YOUR VISION OUR BLUEPRINT</h2>
            <p>You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque hic voluptatem adipisci beatae velit voluptates sequi facere fuga autem!</p>

            </div>
            </div>
            <div className="col-6">
            </div>
          </div>

         </div>

      </section>
    {/* first page end */}




    {/* second page start */}
  <section className='bg-1E3A8A text-light'>
    <div className="container py-5">
        <div className="row ">
            <div className="col-lg-6">
              <div className="p3">
              <img className='w-100' src="s2.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="px-3">
                <h1 className='border-l fw-bold'>Shortly About Us.</h1>
                <h4 className='py-2'>We offer residential and commercial construction services throughout the USA.</h4>
                <p>We are a leading construction company with 30+ years of experience in the industry. We are dedicated to providing the highest quality construction services to our customers meeting their special needs on schedule and within their budgets. Client satisfaction is always our first priority. <br /> <br />

                We are engaged in construction of industrial, residential, commercial, healthcare, and other types of buildings.</p>
                </div>
                
            <div className="row">
              <div className="col-lg-4">
                <div className="shadow my-3 rounded p-3 bg-light text-dark" data-aos="zoom-in" data-aos-duration="500">
               <span className='fw-bold text-warning fs-1'><span className='count'>300</span>+</span>
               <p className='fw-bold'>Satisfied clients</p>
               </div>


              </div>

              <div className="col-lg-4">
              <div className="shadow rounded my-3 p-3 bg-light text-dark" data-aos="zoom-in" data-aos-duration="1000">
               <span className='fw-bold text-warning fs-1'><span className='count'>60</span>k+</span>
               <p className='fw-bold'>Sq ft built</p>
               </div>
              </div>

              <div className="col-lg-4">
              <div className="shadow rounded my-3 p-3 bg-light text-dark" data-aos="zoom-in" data-aos-duration="500">
               <span className='fw-bold text-warning fs-1 count'>25</span>
               <p className='fw-bold'>Years on the market</p>
               </div>

              </div>
            </div>
            
            
            </div>
        </div>
    </div>
  </section>
    {/* second page end */}  




    {/* third page start */}
  <section className='my-5'>
<div className="container">
  <div className="row">
    <div className="col-lg-8">
    <h1 className='fw-bold'>We Deliver the Best Services in Different Sectors.</h1>
    </div>
  </div>  
  <div className="row my-2" >
    <div className="col-lg-6">
<h5 >Our team provides expert services in different fields of construction.</h5>
    </div>
    <div className="col-lg-6 text-end">
      <Link href="#" className='fw-bold'>VIEW ALL SECTORS</Link>
    </div>
  </div>

  <div className="row py-4">
    <div className="col-lg-4">
      <div className="shadow my-3 p-4 bg-1E3A8A text-light rounded" data-aos="zoom-in"data-aos-duration="1000">
      <h3>Commercial</h3>
      <p>We perform high-quality commercial projects of any complexity.</p>
      <Link href="#" className='text-warning'>Learn more..</Link>

    </div>
    </div>
    <div className="col-lg-4">
    <div className="shadow my-3 p-4 bg-1E3A8A text-light rounded" data-aos="zoom-in"data-aos-duration="1000">
    <h3>Residential</h3>
<p>We perform high-quality commercial projects of any complexity.</p>
<Link href="#" className='text-warning'>Learn more..</Link>

</div>
    </div>
    <div className="col-lg-4">
    <div className="shadow my-3 p-4 bg-1E3A8A text-light rounded" data-aos="zoom-in"data-aos-duration="1000">
    <h3>Interiors</h3>
<p>We perform high-quality commercial projects of any complexity.</p>
<Link href="#" className='text-warning'>Learn more..</Link>
    </div>
    </div>
    <h5 className='my-4'>We offer high-quality construction solutions. <span className='text-warning fw-bold'> Build Your Dream Now!</span></h5>

  </div>
</div>
  </section>
    {/* third page end */}




    {/* PROJECTS fourth page start */}
  <section className='py-5 bg-1E3A8A text-light'>
    <div className="container">
    <div className="row">
    <div className="col-lg-8">
    <h1 className='fw-bold'>We Are Very Proud to Present You Our Latest Projects.</h1>

    </div>
  </div> 

  <div className="row my-2" >
    <div className="col-lg-4">
<h5 >Together we build our future we'll live in.</h5>
    </div>
    <div className="col-lg-6 text-end">
      <Link href="/project" className='fw-bold text-warning'>ALL PROJECTS</Link>
    </div>
  </div> 

      <div className="row">
        <div className="col-lg-4">
          <div className="p-4" data-aos="fade-up" data-aos-duration="1000">
          <img className='w-100' src="./s3.jpg" alt="img" />
          <h4 className='py-2 fw-bold'>Neal Complex</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab minus odit nisi nam, voluptate adipisci aliquid ad labore, inventore odio, quae temporibus veniam magni. Impedit qui eligendi illum veniam.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="p-4" data-aos="fade-up" data-aos-duration="1000">
          <img className='w-100' src="./s5.jpg" alt="img" />
          <h4 className='py-2 fw-bold'>Ravi Vhawan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab minus odit nisi nam, voluptate adipisci aliquid ad labore, inventore odio, quae temporibus veniam magni. Impedit qui eligendi illum veniam.</p>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="p-4" data-aos="fade-up" data-aos-duration="1000">
          <img className='w-100' src="./s7.jpg" alt="img" />
          <h4 className='py-2 fw-bold'>Ravi Vhawan</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab minus odit nisi nam, voluptate adipisci aliquid ad labore, inventore odio, quae temporibus veniam magni. Impedit qui eligendi illum veniam.</p>
          </div>
        </div>
      </div>
    
    </div>
  </section>
    {/* PROJECTS fourth page end */}


    {/* SERVICES fifth page start */}
  <section className='container py-5' data-aos="fade-up" data-aos-duration="1000">
<div className="row">
  <div className="col-lg-6">
    <img className='w-100' src="./s8.jpg" alt="img" />
  </div>
  <div className="col-lg-6">
    <div className="p-2">
    <h1 className='fw-bold d-flex gap-3'><span className='text-warning'>|   </span>We Offer All Kinds of Construction Services.</h1>
    <h4 className='my-4'>Whatever your task is, we can implement it delivering the highest quality possible.</h4>
    <p className='my-3 fs-5'>Due to our extensive experience in different fields and a professional team of engineers, constructors, and designers, we can implement your project of any complexity in the following areas:</p>
    <ul className='d-flex flex-wrap gap-4 ps-3 fw-bold'>
      <li>Design & Build</li>
      <li>Remodeling</li>
      <li>Project Management</li>
      <li>Renovation</li>
      <li>Construction</li>
      <li>Design Projects</li>
      <li>Interior Design</li>
      <li>Preconstruction</li>
      <li>Additional Services</li>
    </ul>
    </div>

  </div>
</div>
    </section>


    <section data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="b-container">
          <div className="my-3">
            <img className='w-100' src="./b1.png" alt="bulding" />
            </div>
                <span className="h-text">BUILDING AND HOUSE DEVELOPMENT
                20+ House and Building built up area in Kathmandu valley</span>
             </div>
            
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
              <div className="b-container">
          <div className="my-3">
            <img className='w-100' src="./water.png" alt="bulding" />
            </div>
                <span className="h-text">WATER SUPPLY
                Feasibility Study of 500+ km of Bulk water supply transmission pipeline system</span>
             </div>
              </div>
              <div className="col-lg-12">
              <div className="b-container">
          <div className="my-3">
            <img className='w-100' src="./transport.png" alt="bulding" />
            </div>
                <span className="h-text">TRANSPORTATION
                4 Lane Urban road of ~3 km in Kathmandu</span>
             </div>
              </div>
              <div className="col-lg-12">
              <div className="b-container">
          <div className="my-3">
            <img className='w-100' src="./communication.png" alt="bulding" />
            </div>
                <span className="h-text">COMMUNICATION
                Safeguards Implementation and Monitoring works of over 300 km of Transmission line</span>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SERVICES fifth page end */}



    {/* Experts six page start */}
    <section className='py-5 bg-1E3A8A text-white'>
      <div className="container">
            <h1 className='my-5 fw-bold text-center'>OUR EXPERTS</h1>
            <div className="row">
              <div className="col-md-4">
              <div className="box-container" data-aos="fade-up" data-aos-duration="500">
              <img className='w-100' src="./p1.jpg" alt="expert" />
                <span className="hover-text">Henry Lucas
                Chairman of the Board ECS Group of Companies</span>
             </div>
                </div>

                <div className="col-md-4">
              <div className="box-container" data-aos="fade-up" data-aos-duration="1000">
              <img className='w-100' src="./p2.jpg" alt="expert" />
                <span className="hover-text">Jimmy Carpen
                Chief Engineer ECS Group of Companies</span>
             </div>
                </div>

                <div className="col-md-4">
              <div className="box-container" data-aos="fade-up" data-aos-duration="2000">
              <img className='w-100' src="./p4.jpg" alt="expert" />
                <span className="hover-text">Tony Fiorillo,
                President + CEO  ECS Group of Companies</span>
             </div>
                </div>
              </div>
            </div>
    </section>
    {/* Experts six page end */}


    {/* our awards open */}
<section className='py-5 bg-1E3A8A text-white'>
  <div className="container">
    <h1 className='text-center fw-bold mb-5'>OUR AWARD</h1>
    <div className="row">
      <div className="col-lg-4 text-center">
        <div className="shadow m-3 p-3 rounded bg-light text-dark" data-aos="fade-up" data-aos-duration="500">
        <img width={100} src="./aaa.png" alt="awards" />
        <h4>AS USA Awards 2021</h4>
<p>We were ranked #1 at the professional AS USA Awards 2021 event. Thank you for your trust!</p>
</div>
      </div>
      <div className="col-lg-4 text-center">
        <div className="shadow m-3 p-3 rounded bg-light text-dark" data-aos="fade-up" data-aos-duration="1000">
        <img width={100} src="./aaa.png" alt="awards" />
        <h4>Big Project Awards 2021</h4>
<p>
Our big projects didn't go unnoticed. We received an award for our New Exposure project in NY.
</p>
</div>
      </div>
      <div className="col-lg-4 text-center">
        <div className="shadow m-3 p-3 rounded bg-light text-dark" data-aos="fade-up" data-aos-duration="500">
        <img width={100} src="./aaa.png" alt="awards" />
        <h4>Construction Awards 2021</h4>
<p>
Despite the tough year of 2021, we delivered all our projects on time and received an award for that.</p>
</div>
      </div>
    </div>
  </div>
</section>

{/* our awards end */}


<section className='bg-1E3A8A text-white'>
  <div className="container text-center">
    <h1 className='text-center fw-bold'>OUR PARTNERS</h1>
    <img className='w-50' src="./par.png" alt="iconn" />

  </div>
</section>

<section className='bg-1E3A8A'>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        h
      </div>
      <div className="col-lg-4"></div>
      <div className="col-lg-4"></div>
    </div>
  </div>
</section>

    </>
  )
}

export default Home