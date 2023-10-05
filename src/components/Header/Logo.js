import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import profileImg from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          className="w-full h-auto rounded-full"
          sizes="20vw"
          src={profileImg}
          alt="logo"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Eray Demircioglu
      </span>
    </Link>
  );
}

export default Logo;
