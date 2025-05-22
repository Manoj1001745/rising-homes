import React from 'react'

function Header() {
  return (
    <>
    <section>

    </section>
    <section>
        <nav className=" container mx-auto bg-gray-800 text-white">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-lg font-bold">Logo</div>
            <ul className="flex space-x-10">
              <li>
                <a href="#home" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Header