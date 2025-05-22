"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function page() {
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
        }, 20);
    };

    for (let j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
}, []);

return (
    <>
        <section className=''>
            <img className='w-100 object-fit-cover brightness-60' height={650} src="./s4.jpg" alt="img" />
            <div className="overlay about">
                <h2 className='border-left'>ABOUT US</h2>
                <p>We offer all kinds of construction-related services for our clients. Whatever your task is, we can implement it. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus aliquam autem tenetur ut odit, officiis quisquam ipsam reprehenderit nihil!</p>
            </div>
        </section>


        <section className='py-5'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-4">
                    <img className='w-100' src="/p4.jpg" alt="" />
                    <h2 className='font-bold text-center fw-bold    '>CEO</h2>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="mx-5 px-5">
                        <p className='fs-5'>
                    At Rising  House Engineering Consultancy, we take pride in being a leading engineering consultancy specializing in building and road construction. With a team of experienced professionals, we provide innovative, efficient, and sustainable engineering solutions tailored to meet our clients' needs. Our expertise spans structural design, project management, feasibility studies, and construction supervision, ensuring high-quality execution from planning to completion. We are committed to delivering cost-effective, durable, and safe infrastructure while adhering to industry standards and environmental regulations.
                    </p>
                    <hr />
                    </div>
                    </div>
                </div>
                <hr />
                <div className="row my-5">
                    <div className="col-lg-8">
                        <div className="">
                        <p className='fs-5'>
    At Rising  House Engineering Consultancy, we take pride in being a trusted name in engineering consultancy, providing innovative and reliable solutions in building and road construction. Our commitment to excellence, sustainability, and client satisfaction drives every project we undertake. With a team of skilled professionals and cutting-edge technology, we ensure high-quality engineering services that meet global standards.
Our vision is to transform infrastructure with smart and efficient designs, fostering growth and development in every community we serve. Whether it's designing resilient structures or developing durable road networks, we focus on delivering cost-effective, safe, and sustainable solutions.
We thank our clients, partners, and dedicated team for their unwavering trust and support. Together, we will continue to build a better, more connected future.
</p>
                        </div>
<hr />
                    </div>
                   <div className="col-lg-4">
                    <div className="">
                    <img className='w-100' src="/p1.jpg" alt="" />
                    <h2 className='font-bold text-center my-2 fw-bold'>CHAIRMAN</h2>
                    </div>
                   </div>
                </div>
            </div>
        </section>


<section className='bg-1E3A8A '>
    <div className="container py-4">
       <h1 className='fw-bold text-center text-white'>BACKGROUNG</h1>
        <div className="row">
            <div className="col-lg-12 py-4 text-light">
<p className='fs-5'>RISING HOME ENGINEERING CONCULTANCY is established as a joint venture Company between ITECO Engineering Ltd. (Consulting firm of Switzerland with registered address at Alte Obfelderstrasse 68, P.O. Box, CH-9810, Affolttern a/A, Switzerland) and Nepalese partners to meet the needs of a developing country like Nepal in the field of multi-disciplinary consulting services. The firm is registered with the Government of Nepal, Department of Industry as an engineering consulting firm in May 3, 1987 (BS: 2044/01/20), and with the Tax Department and the VAT office (PAN 500117642).The range of operation of the Firm includes diverse infrastructure development activities such as transport, communication, water supply and sanitation,etc.</p>
            </div>
            <div className="row py-4">
            <div className="col-lg-6">
                    <div className="shadow bg-light rounded py-2">
                        <div className="text-center">
<img src="eye.png" alt="" />
<h3 className='fw-bold '>OUR VISION</h3>
</div>
<ul className='py-2 fs-5'>
    <li>To be renowned for our working methodologies, and human resource capabilities.</li>
    <li>To provide complete engineering solutions from project identification to handover in sectors of energy, water resource management and transportation.</li>
    <li>To provide integrated investigations & research services in survey & mapping, hydrology & sediment and geological in all type of projects</li>
    </ul>
    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shadow bg-light rounded py-2">
                        <div className="text-center">
<img src="eye2.png" alt="" />
<h2 className='fw-bold'>OUR MISSION</h2>
</div>
<ul className='py-3 fs-5'>
    <li>Adopt our clients’ environmental challenges as our own.</li>
    <li>Foster a culture of success for employees by sharing equity ownership and rewarding employees when our clients and company succeed.</li>
    <li>Promote a sustainable environment through innovation and the creative application and management strategies.</li>
    <li>Grow our business profitably.</li>
    </ul>
    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        {/*2 counter of about start */}
        <section className='py-5 text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="shadow my-3 bg-warning rounded p-3">
                            <h2 className='fw-bold'><span className='count'>60</span>k+ sq. f</h2>
                            <p className='fw-bold'>Built</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="shadow my-3 bg-warning rounded p-3">
                            <h2 className='fw-bold'><span className='count'>2422</span>M</h2>
                            <p className='fw-bold'>Revenue</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="shadow my-3 bg-warning rounded p-3">
                            <h2 className='fw-bold count'>145</h2>
                            <p className='fw-bold'>Employees</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="shadow my-3 bg-warning rounded p-3">
                            <h2 className='fw-bold count'>300+</h2>
                            <p className='fw-bold'>Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*2 counter end */}

    {/* about 3rd start */}
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
    {/* about 3rd end */}

        <section className='py-5 bg-1E3A8A'>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/6140a8502901a70022fb6a95_optimized_1169.webp" alt="" />
                    </div>
                    <div className="col-lg-6 shadow text-light py-2">
                        <h1 className='fw-bold'> About Great House.</h1>
                        <h4 className='my-4'>We are experts in construction and engineering fields. Great House is the best choice for your project of any complexity.</h4>
                        <p className='my-4'>We are a leading construction company with 25+ years of experience in the industry. We are dedicated to providing a full suite of high-quality construction services driven by modern technologies. From residential construction to shopping centers and government facilities, no job is too big or too small for us.</p>
                        <p>Our trustworthy business practices, efficient work processes, and a huge performance capacity ensure the Basalt's ability to deliver as promised.</p>
                        <ul className='fw-bold text-warning d-flex flex-column gap-3'>
                            <li> Special rigger license holder.</li>
                            <li> Asbestos certified сontractor.</li>
                            <li> Certified roofing contractor.</li>
                            <li> OSHA certified.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    {/* vision mission start */}
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="shadow my-3 mx-3 p-5 bg-1E3A8A text-light">
                            <h2>Our Vision</h2>
                            <p>Our vision is to be the leading world's contractor and employer of choice with the ability to provide successful construction projects in the USA and other countries.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shadow my-3 mx-3 p-5 bg-1E3A8A text-light">
                            <h2>
                            Our Mission</h2>
                            <p>Our mission is to satisfy our clients through excellent service, integrated solutions, and the highest quality. We  relationships with clients delivering our promises.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* vision mission end */}

        <section className='py-5 bg-1E3A8A'>
            <div className="container text-light">
                <h1 className='font-bold'>Sectors Overview.</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <p>We are proud to be the leading company with more than 25 years of experience.</p>
                    </div>
                    <div className="col-lg-6 text-end">
                        <button className='btn btn-warning m-neg'>BUILD YOUR DREAM </button>
                    </div>
                </div>
            </div>
        </section>

       

        <section className=' bg-1E3A8A'>
            <div className=' gap-3 text-light'>
                <div className="row">
                    <div className="col-lg-6">
                    <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613b27ff4cc3ff0022811dfd_optimized_1841_c1395x930-155x298.webp" alt="" />

                    </div>
                    <div className="col-lg-6">
                    <div className='shadow p-4'>
                <h1 className='font-bold'>Each Member of Our Team Is a Real Professional.</h1>
                <h4>Our team consist of 100+ highly skilled professionals in different fields. Their experience drives us forward.</h4>
                <p>Our staff includes engineers, constructors, managers, designers, and many other experts that care about your project and implement it strictly on schedule. We are happy to work on even the most complicated projects.</p>
                <p>Also, we are always in search of new talents — creative and motivated individuals eager to become part of our team. We offer a diverse range of career opportunities along with a pack of exceptional benefits. If you want to join us, click on the button below.</p>
                <div className='d-flex gap-5'>
                <button className='btn btn-warning'>See Vacancy</button>
               
                </div>
                </div>
                    </div>
                </div>

            
           
            </div>
        </section>


    </>
);
}

export default page