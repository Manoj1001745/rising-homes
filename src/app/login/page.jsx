import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <>
    <div className="container my-5 py-5">
    <section className='my-5 d-flex justify-content-center'>
        <form className="form my-5">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span>
            </span>
        </div>
        <div className="input-container">
            <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit">
            Sign in
        </button>
        <p className="signup-link">
            No account?
            <Link href="/register">Sign up</Link>
        </p>
        </form>
    </section>
    </div>
    </>
  )
}

export default login