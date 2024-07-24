'use client'

import { useState } from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navItems } = siteConfig;

    /**
     * Desplaza la página suavemente hacia arriba.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Navbar isBlurred={false} maxWidth="lg" className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent className="flex h-fit py-2 px-6 mx-auto gap-3 rounded-full bg-primary/25 backdrop-blur-sm" justify="center">

                <NavbarItem>
                    <div onClick={scrollToTop} className="text-foreground text-sm hover:scale-95 border-b-1 border-transparent dark:hover:text-secondary hover:border-foreground dark:hover:border-secondary transition-all duration-300">
                        Inicio
                    </div>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#about-me" className="text-foreground text-sm hover:scale-95 border-b-1 border-transparent dark:hover:text-secondary hover:border-foreground dark:hover:border-secondary transition-all duration-300">
                        Sobre mí
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#timeline" className="text-foreground text-sm hover:scale-95 border-b-1 border-transparent dark:hover:text-secondary hover:border-foreground dark:hover:border-secondary transition-all duration-300">
                        Experiencia
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#contact" className="text-foreground text-sm hover:scale-95 border-b-1 border-transparent dark:hover:text-secondary hover:border-foreground dark:hover:border-secondary transition-all duration-300">
                        Contacto
                    </Link>
                </NavbarItem>

                <ThemeSwitch className="hover:scale-95 transition-all" />

            </NavbarContent>


        </Navbar>
    );
}
