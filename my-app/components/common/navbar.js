"use client"
import { Dropdown, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiAirplay, FiAward, FiMenu, FiUser } from 'react-icons/fi'
import PrimaryButton from '../button/primary_button'
import { MdGTranslate } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronDown } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    {
      id: 1,
      link: '/',
      label: 'Home',
    },
    {
      id: 2,
      link: '/',
      label: 'Pets',
      children: [
        {
          id: 1,
          link: '/',
          label: 'Cats',
        },
        {
          id: 2,
          link: '/',
          label: 'Dogs',
        },
        {
          id: 3,
          link: '/',
          label: 'Birds',
        }
      ]
    },
    {
      id: 3,
      link: '/',
      label: 'Services',
      children: [
        {
          id: 1,
          link: '/services',
          label: 'Grooming',
        },
        {
          id: 2,
          link: '/trainers',
          label: 'Training',
        },
        {
          id: 3,
          link: '/bath-services',
          label: 'Bath services',
        }
      ]
    },
    {
      id: 4,
      link: '/our-shop',
      label: 'Products',
    }
  ]
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setOpen(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container relative'>

      <div className='flex items-center justify-between text-lg font-medium py-4'>
        <Link href='/' >
          <Image src="/logo/logo.png" width={100} height={100} alt="logo"></Image>
        </Link>
        {open && (
          <div className={`lg:flex items-center gap-4 ${isMobile ? 'flex-col bg-slate-200 absolute z-50 top-[78px] left-0 w-full' : ''}`}>
            {items.map((item) => (
              <ul key={item.id} className='flex items-center hover:text-primary p-3 md:py-1 md:px-3 md:rounded'>
                {item?.children ? (
                  <Dropdown
                    overlay={
                      <Menu>
                        {item.children.map((childItem) => (
                          <Menu.Item key={childItem.id}>
                            <Link href={childItem.link}>{childItem.label}</Link>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                  >
                    <li className='flex items-center space-x-2 space-y-1 cursor-pointer'>
                      <span>{item.label}</span>
                      {item.children && <FaChevronDown />
}
                    </li>
                  </Dropdown>
                ) : (
                  <li>
                    <Link href={item.link}>{item?.label}</Link></li>
                )}
              </ul>
            ))}
            <button className='border-[2px] ml-3 mb-3 md:mb-0 border-primary md:px-[15px] md:py-2 py-1 px-3 md:rounded text-primary'>Become A Seller</button>
          </div>
        )}
        <div className='flex items-center gap-4'>
          <Link href='/cart'>
        <FaCartShopping className='hover:text-primary' />
          </Link>
          
          {/* <Link href='/login'>
          <FiUser className='hover:text-primary'></FiUser>
          </Link> */}
          <Dropdown
            overlay={
              <Menu>
                <Link href='/login'><Menu.Item key="2">Login</Menu.Item></Link>
                <Link href='/profile'><Menu.Item key="1">Profile</Menu.Item></Link>
              </Menu>
            }
          >
            <FiUser className="hover:text-primary"></FiUser>
          </Dropdown>
          <FiMenu className='cursor-pointer text-lg md:hidden' onClick={() => setOpen(!open)}></FiMenu>
          <div className='hidden md:block'>
            <PrimaryButton size={' !py-2 md:!py-3 px-4 md:!px-5 !text-lg'}>
              <div className='flex items-center gap-1 md:gap-2 text-base md:text-lg'>
                <FiAirplay></FiAirplay>
                <h1 className='mb-[3px]'>How it works</h1>
              </div>
            </PrimaryButton>
          </div>
        </div>

      </div>
    </div>

  )
}
