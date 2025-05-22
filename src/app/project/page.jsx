import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <section>
        <img className='w-100 object-fit-cover brightness-60' height={650} src="./s7.jpg" alt="img" />
        <div className="overlay">
            <h2 className='border-left'>OUR PROJECTS</h2>
            <p>Every month, we implement 10+ projects of different scales. You can see some of them below. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut sed autem facilis dicta laudantium minima quasi voluptatum obcaecati tempora?</p>
            </div>
    </section>

    <section>
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6">
                    <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <p className='my-2'>RESIDENTIAL</p>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-6">
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
            </div>

            <div className="row py-5 g-4">
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>
                <div className="col-lg-4"> 
                <img className='w-100' src="https://3hgpj.weblium.site/res/613749eb7b8e840022b5071a/613f183f4cc3ff00228a150f_optimized.webp" alt="" />
                <span>RESIDENTIAL</span>
                <h3>Cervantes Home Renovation</h3>
                <Link href="#">LEARN MORE </Link>
                </div>

            </div>
        </div>
    </section>


    <section>
        <div className='container text-center'>
            <h1 className='fw-bold'>Are You Ready to Discuss Your Next Project?</h1>
<div className="py-4">
            <button className='btn btn-warning ' >Contact Us</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default page