import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <section>
        <img className='w-100 object-fit-cover brightness-60' height={650} src="./s2.jpg" alt="img" />
        <div className="overlay">
            <h2 className='border-left'>OUR SERVICES</h2>
            <p>We offer all kinds of construction-related services for our clients. Whatever your task is, we can implement it. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus aliquam autem tenetur ut odit, officiis quisquam ipsam reprehenderit nihil!</p>
            </div>
    </section>

<section className='my-5'>
    <div className="container">
        <div className="row g-5">
        <div className="col-lg-4">
        <div className="shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <img className='w-100' src="https://engineersindia.com/storage/2018/10/03_eil_featured_Panipat_Naphtha_Cracker_Project.jpg" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>
            <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <img className='w-100' src="https://engineersindia.com/admin/Uploads/Files/VRMP.JPG" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>
            <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <img className='w-100' src="https://engineersindia.com/admin/Uploads/Files/MFC.JPG" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <img className='w-100' src="https://engineersindia.com/admin/Uploads/Files/Gty.jpg" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>

                <div className="col-lg-4">
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <img className='w-100' src="https://engineersindia.com/admin/Uploads/Files/PFCCU%20.JPG" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                    <div >
                    <img className='w-100' src="https://engineersindia.com/assets/images/Thumbnail-1.jpg" alt="" />
                    </div>
                    <h3>Construction</h3>
                    <p>Our mission is to make your construction process as smooth as possible.</p>
                    <Link href="#" >LEARN MORE</Link>
                    </div>
                </div>
        </div>
    </div>
</section>
    </>
  )
}

export default page