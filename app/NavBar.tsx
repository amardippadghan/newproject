'use client'
import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);
    const links = [{
        lebel:'Dashboard' , href : "/"
     },
    {
        lebel:'Issue' , href : "/issue"
    }]
  return (
  <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
    <Link href="/"><AiFillBug/></Link>
    <ul className='flex space-x-6'>
        {links.map(link=> (
            <Link key={link.href} className={`${currentPath === link.href ? 'text-white' : "text-zinc-500"} hover:text-white transition-colors`} href={link.href}>{link.lebel} </Link>
        ))}




    </ul>

  </nav>
  )
}

export default NavBar
