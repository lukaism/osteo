import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavIcon,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./NavBarElements"

const NavBar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    console.log("heyyaaa")

    return (
        <>
            <IconContext.Provider value={{ color: "#141414" }}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
              NOMAD FISIOTERAPIA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">Servicios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/pricing">Precios</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact">Contacto</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/blog">Blog</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar