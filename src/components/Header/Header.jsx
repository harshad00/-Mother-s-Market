import React, { useEffect, useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();


  

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
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px' />
            </Link>
          </div>
          <ul className='flex ml-auto items-center'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 rounded-full hover:text-white'
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
