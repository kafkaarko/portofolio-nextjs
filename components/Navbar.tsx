import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {/* <a >Porkaf</a> */}
        <Link href="/" className="btn btn-ghost text-2xl">Porkaf</Link>
      </div>
      <div className="flex-none">
      <input type="checkbox" value="light" className="toggle theme-controller" />   
      </div>
    </div>
  )
}

export default Navbar
