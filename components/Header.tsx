import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../public/images/Logo.png'

const courseUrl =
   '/studio';

const Header = () => {
   return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
         <Link href="/">
            <div className="flex items-center space-x-1">
               <div className="relative w-[50px] h-[50px]">
                  <Image
                     src={LogoImg}
                     alt="NsmImg"
                     fill
                     className="absolute t-0 l-0 object-cover rounded-full"
                  />
               </div>
               <h1 className="text-white">Nex-Sphere Media</h1>
            </div>
         </Link>
         <div>
            <Link
               href={courseUrl}
               className="px-5 py-3 text-sm md:text-base bg-lizard_green text-black rounded-full flex items-center text-center">
               Studio
            </Link>
         </div>
      </header>
   );
};

export default Header;
