"use client"
import Link from 'next/link'
import React from 'react'

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Portfolio", path: "/portfolio" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "About", path: "/about" },
  { id: 5, name: "Contact", path: "/contact" },
  { id: 6, name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  return (
    <div>
        <Link href={"/"}>Next Project</Link>
        <div>
            {links.map((link) => (
                <Link key={link.id} href={link.path}>
                    {link.name}
                </Link>
            ))}
            <button onClick={() => console.log("logout")}>Logout</button>
        </div> 
    </div>
  )
}

export default Navbar