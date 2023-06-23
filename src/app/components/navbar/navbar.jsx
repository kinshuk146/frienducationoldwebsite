import React from 'react'
import Link from 'next/link';
import Logo from '../../../../public/logo.png'
import Dark_mode from '../../../../public/dark_mode.png'
import Image from 'next/image';
import '../../Style/navbar.css'
const links = [
    {
        id: 1,
        title: 'About us',
        url: '/about',
    },
    {
        id: 2,
        title: 'Courses',
        url: '/course',
    },
    {
        id: 3,
        title: 'Internships',
        url: '/internship',
    },
    {
        id: 4,
        title: 'Community',
        url: '/community',
    },
    {
        id: 5,
        title: 'Contact us',
        url: '/contact',
    },
]
const navbar = () => {
  return (
    <div className=' flex justify-around items-center	bg-darkModeBlue text-white h-20'>
        <div className='w-52'><Link href = '/'><Image src ={Logo}/></Link></div>
        <div className='navbar_links flex justify-between text-sm w-1/3'>
            {links.map((link)=>(
                <Link key={link.id} href={link.url} id='link'>{link.title}</Link>
            ))}
        </div>
        <div className="flex justify-between items-center w-36">
            <button className='py-1 px-8 border-2 border-buttonBlue rounded-full hover:bg-buttonBlue duration-500'><Link href= '/login'>Login</Link></button>
            <div className='logo'><Image src ={Dark_mode}/></div>
        </div>
    </div>
  )
}

export default navbar