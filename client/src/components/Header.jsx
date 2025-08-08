import React from 'react';
import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import {useSelector} from 'react-redux';

export default function Header() {
    const path = useLocation().pathname;
    const {currentUser} = useSelector(state => state.user)
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm 
        sm:text-xl font-semibold dark:text-white'>
            School's
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-blue-950 rounded-lg text-white'>Notice Board</span>  
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='grey' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
                <FaMoon />
            </Button>
            {currentUser ? (
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar 
                            alt='user'
                            img={currentUser.profilePicture}
                            rounded
                        />
                    }
                >
                    <DropdownHeader>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
                        <Link to={'/dashboard?tab=profile'}>
                            <DropdownItem>Profile</DropdownItem>
                        </Link>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </DropdownHeader>

                </Dropdown>
            ):
            (

                <Link to='/sign-in'>
                    <Button className='bg-gradient-to-r from-green-300 to-blue-500 text-white'>
                        Sign In
                    </Button>
                 </Link>
            )}
           
           <NavbarToggle />  
        </div>
        <NavbarCollapse>
                <NavbarLink as={Link} to="/home" className={path === "/home" ? "text-teal-400 font-semibold" : ""}>
                    Home
                </NavbarLink >
                <NavbarLink as={Link} to="/about" className={path === "/about" ? "text-teal-400 font-semibold" : ""}>
                    About
                </NavbarLink >
                <NavbarLink as={Link} to="/projects" className={path === "/projects" ? "text-teal-400 font-semibold" : ""}>
                    Projects
                </NavbarLink>
        </NavbarCollapse> 
    </Navbar>
  )
}
