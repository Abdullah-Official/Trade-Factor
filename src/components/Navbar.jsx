import React from 'react'
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
} from "@material-tailwind/react";

import Logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom';
import { AlignJustify, X } from 'lucide-react';

const navs = ["Home", "Strategies", "Performance", "About Us", "Work With Us"]

function NavItem({ children }) {
    return (
        <li>
            <NavLink to={`/${children !== "Home" ? children.toLowerCase().replace(/ /g, "-") : ""}`}>
                <p
                    className="!font-[400] text-white text-[15px]"
                >
                    {children}
                </p>
            </NavLink>
        </li>
    );
}
const buttonStyle = {
    border: '3px solid',
    borderImageSource: 'linear-gradient(94.65deg, #45D1FD 1.57%, #02539A 103.27%)',
    /* You might want to add more CSS properties like width, height, padding, etc. */
};

const NavHeader = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false),
        );
    }, []);
    return (
        <Navbar shadow={false} fullWidth className="border-0 backdrop-filter-none py-8 fixed z-50  " style={{background: "linear-gradient(to right, rgba(2, 83, 154, 0.4) -100%, rgba(255, 0, 184, 0.1) 75%)"}}>
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to={"/"}>
                    <div className="flex gap-4 items-center">
                        <img src={Logo} alt="logo" className='w-[40px] object-contain' />
                        <p className="text-lg font-semibold text-white">
                            Trade Factor
                        </p>
                    </div>
                </NavLink>
                <ul className="ml-10 hidden items-center gap-6 xl:gap-10 lg:flex">
                    {navs.map((nav) => (
                        <NavItem key={nav}>
                            {nav}
                        </NavItem>
                    ))}
                </ul>
                <div className="hidden items-center  lg:flex">
                    <NavLink to={"/login"}>
                        <Button variant="text" className='text-white !w-fit font-[500] capitalize text-[14px]'>Sign In</Button>
                    </NavLink>                    <NavLink to="/get-started"
                        className="flex rounded-full mx-auto bg-gradient-to-tr from-[#45D1FD] to-[#02539A] p-[2.5px] shadow-lg">
                        <button className="flex-1 text-[14px] font-[500] bg-[#010B24] px-6 xl:px-8 py-3 rounded-full">
                            Get Started
                        </button>
                    </NavLink>
                </div>
                <IconButton
                    variant="text"
                    color="white"
                    onClick={handleOpen}
                    className="ml-auto inline-block lg:hidden"
                >
                    {!open ? <AlignJustify className="text-white" /> : <X className="text-white" />}
                </IconButton>
            </div>
            <Collapse open={open}>
                <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                        {navs.map((nav) => (
                            <NavItem key={nav}>
                                {nav}
                            </NavItem>
                        ))}
                    </ul>
                    <div className="mt-6 mb-4 flex items-center gap-2">
                        <NavLink to={"/login"}>
                            <Button variant="text" className='text-white !w-fit font-[500] capitalize text-[14px]'>Sign In</Button>
                        </NavLink>
                        <NavLink to="/get-started"
                            className="flex rounded-full bg-gradient-to-tr from-[#45D1FD] to-[#02539A] p-[2.5px] shadow-lg">
                            <button className="flex-1 text-[14px] font-[500] bg-[#010B24] px-5 xl:px-8 py-2 rounded-full">
                                Get Started
                            </button>
                        </NavLink>
                    </div>
                </div>
            </Collapse>
        </Navbar>

    )
}

export default NavHeader