import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { AiFillInstagram, AiOutlineTwitter,AiFillFacebook,AiFillYoutube} from 'react-icons/ai';
import { FaTiktok, FaWhatsapp } from "react-icons/fa";



const footerData = {
   techStack:[],
   links: [
      {
         id: nanoid(),
         text:<AiOutlineTwitter className='text-4xl'/>,
         href: 'https://www.twitter.com/@NexSphere12/',
      },
      {
         id: nanoid(),
         text: <AiFillYoutube className='text-4xl'/>,
         href: 'https://www.youtube.com/@Nex-sphere',
      },
      {
         id: nanoid(),
         text: <AiFillInstagram className='text-4xl'/>,
         href: 'https://www.instagram.com/nexsphere12/p/C1dVMFDitWN/',
      },
      {
         id: nanoid(),
         text:<AiFillFacebook className='text-4xl'/>,
         href: 'https://www.FaceBook.com/profile.php?id=61554973415693',
      },
      {
         id: nanoid(),
         text:<FaTiktok className='text-4xl'/>,
         href: 'https://www.Tiktok.com/@nexsphere12',
      },
      {
         id: nanoid(),
         text:<FaWhatsapp className='text-4xl'/>,
         href: 'https://www.Wathsapp.com/@nexsphere12',
      },
   ],
};

const Footer = () => {
   return (
      <footer className="text-white">
         <hr className="text-[#212b44]" />
         <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 py-8 px-10 justify-between">
            <div className="flex flex-col space-y-2">
               <div className="flex space-x-4 flex-wrap">
                  {footerData.techStack.map((el, index, arr) => (
                     <>
                        <p className="flex-none" key={nanoid()}>
                           {el}
                        </p>
                        {index + 1 < arr.length && (
                           <span className="text-happy_pink"> | </span>
                        )}
                     </>
                  ))}
               </div>
               <Link href={"https://www.facebook.com/profile.php?id=61554973415693&sk=about"}
               className="flex items-center justify-between space-x-2 font-bold px-10 py-5 text-happy_pink"> About</Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end space-x-3 flex-wrap display-none">
            <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5 text-happy_pink">Contact Us On :+232 78684536</div>
            <div className="text-happy_pink text-right font-extrabold" >Follow Us On :</div>
               {footerData.links.map((el, index, arr) => (
                  <>
                     <div key={el.id} className="hover:text-lizard_green">
                        <Link target="_blank" href={el.href}>
                           {el.text}
                        </Link>
                     </div>
                     {index + 1 < arr.length && (
                        <span className="text-happy_pink"> | </span>
                     )}
                  </>
               ))}
            </div>
         </div>
         
         <div className='text-center font-bold'>Copyright 2024 Nex-Sphere Media All right reserved</div>
      </footer>
   );
};

export default Footer;