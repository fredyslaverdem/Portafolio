'use client'

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);

    };

    return(  
    <nav className="fixed w-full h-24 shadow-xl bg-gray-800 z-10">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <div> {/* Aqui hacemos el div para el lado izquieredo donde puede ir un logo con imagen pero en este caso lo estamos haciendo con solo texto */}
                <Link href='/' className="text-gray-200 text-2xl font-bold">MY PROJECTS</Link>
            </div>
            <div className="hidden sm:flex"> {/* Y en este div lo que va del lado derecho de nuestro navbar */}
                <ul className=" hidden sm:flex">
                    <Link href='/'>
                        <li className="ml-10 uppercase hover:border-b border-gray-400 text-xl text-gray-200">
                            ABOUT ME
                        </li>
                    </Link>
                    <Link href='/proyectos'>
                        <li className="ml-10 uppercase hover:border-b border-gray-400 text-xl text-gray-200">
                            PROJECTS
                        </li>
                    </Link>
                    <Link href='/mas'>
                        <li className="ml-10 uppercase hover:border-b border-gray-400 text-xl text-gray-200">
                            HABILITIES
                        </li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
        </div>
        <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gray-600 p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 h-screen bg-gray-600ease-in duration-500"
            }
            >
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25} />
                </div>
            </div>
            <div className="flex-col py-4">
                <ul>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-gray-200">
                            ABOUT ME
                        </li>
                    </Link>
                    <Link href="/proyectos">
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-gray-200">
                            PROJECTS
                        </li>
                    </Link>
                    <Link href="/mas">
                        <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-gray-200">
                            HABILITIES
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="pl-4">
                <Link href='/' className="text-gray-200 font-bold">MY PROJECTS</Link>
            </div>
        </div>
    </nav>
        
    );
};

export default Navbar;