import React,{useState} from 'react';
import {Hamburger, Logo, Menu, MenuLink, Nav} from "./NavbarStyle";


const Navbar = () => {
    const[isOpen,setIsopen]=useState(false)
    return (
        <div>
            <Nav>
                <Logo to="/">

                    <i>{"Peerlog Kitchen "}</i><span> Recipe</span>

                </Logo>

                <Hamburger onClick={() => setIsopen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>

                <Menu isOpen={isOpen}>
                    <MenuLink to="/about">About</MenuLink>
                    <MenuLink
                      to={{ pathname: "https://github.com/tahiraydin" }}
                      target="_blank"
                      rel="noopener noreferrer">
                      Github
                    </MenuLink>
                    <MenuLink to="/login">Logout</MenuLink>
                </Menu>

            </Nav>
        </div>
    )
}

export default Navbar ;