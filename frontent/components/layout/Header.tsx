'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const AnnouncementBar = () => {
  return (
    <div className='bg-black w-full py-2'>
      <div className='container flex justify-center items-center px-8'>
        <span className='text-center text-sm font-medium tracking-wide text-white uppercase'>
          free shipping on orders over $15.00
        </span>
      </div>
    </div>
  );
};

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;

      if (scrolledUp) {
        setOpen(true);
      } else {
        setOpen(false);
      }

      setPrevScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className='w-full sticky top-0 z-50'>
      <div
      // className={`w-full transform transition-transform duration-300 ease-in-out ${
      // 	open ? "translate-y-0" : "-translate-y-full"
      // }`}
      >
        <AnnouncementBar />
      </div>
      <div className='w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 backdrop-blur-sm shadow-sm border-gray-100'>
        <div className='flex justify-between items-center container mx-auto px-8'>
          <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
            <button className='text-gray-700 hover:text-gray-900 md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
            <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/shop'}>New Arrival</Link>
              <Link href={'/shop'}>Sale</Link>
            </nav>
          </div>

          <Link href={'/'}>Link</Link>

          <div className='flex flex-1 items-center justify-end gap-2 sm:gap-4'>
            <button className='text-gray-700 hover:text-gray-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </button>
            <Link href={'/sign-in'}>Sign In</Link>
            <Link href={'/sign-up'}>Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
