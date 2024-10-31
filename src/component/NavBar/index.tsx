'use client'
import { useState } from "react";

interface linkItems {
    name: string;
    url: string;
}
interface menu {
    items: linkItems[];
    isMobile: boolean;
}

const Items = ({items,isMobile}:menu) => {
    return (
        <>
            {
                items.map((item:linkItems,index:number) => (
                    isMobile? (
                        <a key={index} href={item.url} className="block text-white hover:text-blue-200">
                            {item.name}
                        </a>
                    ):(
                        <a key = {index} href={item.url} className="text-white hover:text-blue-200">
                            {item.name}
                        </a>
                    )
                ))
            }
        </>
    )
}

function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menu, setMenu] = useState<linkItems[]>([
        {
            name: "Home",
            url:"/"
        },
        {
            name: "Create",
            url:"/create"
        },
        {
            name: "View",
            url:"/"
        },
    ])


    return (
        <nav className="bg-emerald-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href={"/"}>
                    <h1 className="text-white font-bold text-lg">HiresPrinte test</h1>
                </a>

                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-4">
                    <Items items={menu} isMobile={false}/>
                </div>

            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-2 px-4 pt-4 pb-2 bg-emerald-500 text-center">
                        <Items items={menu} isMobile={true} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
