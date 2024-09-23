import React, { useState,useEffect } from "react"
import {Link} from 'react-scroll'
import logo from "../assets/Icon.png"

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handlescroll =() => {
            if(window.scrolly > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handlescroll);

        return ()=> {
            window.addEventListener('scroll', handlescroll);
        }
    });

    //navitems array 
    const navItems =[
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},
    ]
  return (
   
   <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
    <nav>
        <div>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inlien-block items-center'/><span className='text-[##263238]'>NEXCENT</span></a>

            {/* nav items for large devices*/}
            <ul className='md:flex space-x-12 hidden'>
                {
            navItems.map(({link,path}) =><Link to={path}>{link}</Link>)
                }

            </ul>
        </div>
    </nav>
    
   
    </header>
  );
}

export default Navbar;