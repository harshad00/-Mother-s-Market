import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'About Us',
      slug: "/about-us",
      active: true
    },
    {
      name: 'ContactUs',
      slug: "/contactUs",
      active: true
    },
    {
      name: 'Vendors',
      slug: "/vendors",
      active: authStatus
    },
    {
      name: 'Gallery',
      slug: "/gallery",
      active: authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className='py-3 shadow bg-green-400'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo className=" text-xl sm:text-3xl md:text-4xl lg:text-4xl" />
            </Link>
          </div>
          <ul className={`lg:flex items-center text-white  ${isOpen ? 'block' : 'hidden'} lg:block`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate(item.slug);
                    }}
                    className='inline-block px-6 py-2 duration-200 rounded-full hover:underline'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <div className='lg:hidden relative'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isOpen ? 'absolute top-[-70px] right-3' : ''}`}>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
