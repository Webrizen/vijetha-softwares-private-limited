import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';

export default function Navbar() {

  return (
    <>
    <header className='header'>
        <Link href='/'>
        <div className="logo">
            <Image src={Logo} alt="Vijetha Softwares Logo" />
            <span>Vijetha Softwares</span>
        </div>
        </Link>
        <div className="links">
            <Link href='/book-meeting'>Schedule a Call</Link>
            <div className="ico"><BiLogoGithub /></div>
            <div className="ico"><BiLogoTwitter /></div>
            <div className="ico"><BiLogoLinkedin /></div>
        </div>
      </header>
    </>
  );
}
