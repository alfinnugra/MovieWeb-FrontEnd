import React from 'react'

function Navbar() {
  return (
    <div className="navbar p-5">
      <div className="navbarFrist flex justify-between">
        <div className="navbarHead">
          <h1 className='text-red-500 text-4xl'>Movie</h1>
        </div>
        <div className="navbarTab">
          <a href="" className='mr-5'>Message</a>
          <a href="">Login</a>
        </div>
      </div>
      <div className="navbarSecond text-xs space-x-3">
        <a href="">Horor</a>
        <a href="">Romance</a>
        <a href="">Comedy</a>
        <a href="">Action</a>
      </div>
    </div>
  )
}

export default Navbar