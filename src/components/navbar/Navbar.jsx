"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

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
    <div className={styles.container}>
        <Link className={styles.logo} href={"/"}>Next Project</Link>
        <div className={styles.links}>
            {links.map((link) => (
                <Link key={link.id} href={link.path} className={styles.link}>
                    {link.name}
                </Link>
            ))}
            <button className={styles.logout} onClick={() => console.log("logout")}>Logout</button>
        </div> 
    </div>
  )
}

export default Navbar