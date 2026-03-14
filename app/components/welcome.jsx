import Link from 'next/link';
import React from 'react'

export default function Welcome() {
    return(
        <div className="relative inline-block">
            <img src="/3DS.JPEG" alt="3DS" className="w-[800px] h-auto" />

            {/*Top half of 3DS*/}
            <div className="absolute top-[13%] left-[31.5%] w-[37.5%] h-[32%] flex items-center justify-center">
                <h1 className="text-[#D3E6FF] font-mono text-xl tracking-tighter">
                    Christina's site!
                </h1>
                <div className="w-12 h-12 bg-[#d3e6ff] mt-2 shadow-inner"></div>
            </div>

            {/*Bottom half of 3DS*/}
            <div className="absolute top-[55%] left-[30%] w-[40.5%] h-[33%] flex flex-col items-start justify-center p-4">
                <ul className="text-black font-mono text-[10px] space-y-2 list-none">
                    <li>⊹ ࣪ ˖ CS major @ University of Illinois, Chicago</li>
                    <li>₊˚⊹ ᰔ Expected graduation: May, 2028</li>
                    <li>✩｡° Email: christyrd.17@gmail.com</li>
                    <li>⟡ ݁₊ . Chicago, IL 60623</li>
                </ul>
            </div>

            <div className="absolute -bottom-10 -left-10 w-24 h-auto">
                <img
                    src="/musicnote.png"
                    alt="Music Note"
                    className="w-full h-auto drop-shadow-md"
                />
            </div>

            {/*Button to navigate to projects*/}
            <div className="absolute top-[81%] left-[23%] w-[4.5%] h-[33%] flex flex-col items-center justify-center">
                <Link
                    href="/projects"
                    className="px-2 py-1 bg-white/50 border-2 border-gray-400 rounded-md font-mono text-sm hover:bg-white hover:shadow-md"
                >
                    projects

                </Link>
            </div>

            {/*Button to navigate to contact*/}
            <div className="absolute top-[81%] left-[74%] w-[4.5%] h-[33%] flex flex-col items-center justify-center">
                <Link
                    href="/contact"
                    className="px-2 py-1 bg-white/50 border-2 border-gray-400 rounded-md font-mono text-sm hover:bg-white hover:shadow-md"
                >
                    contact

                </Link>
            </div>

            {/*Button to navigate about*/}
            <div className="absolute top-[81%] left-[48%] w-[4.5%] h-[33%] flex flex-col items-center justify-center">
                <Link
                    href="/about"
                    className="px-2 py-1 bg-white/50 border-2 border-gray-400 rounded-md font-mono text-sm hover:bg-white hover:shadow-md"
                >
                    about

                </Link>
            </div>





            <div className="absolute top-37 right-60 w-23 h-auto">
                <img
                    src="/hanni.jpg"
                    alt="Hanni"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}