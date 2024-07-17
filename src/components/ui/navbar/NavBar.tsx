'use client'

import { useState } from "react";
import { Navbar, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navItems } = siteConfig;

    return (
        <Navbar isBlurred={false} maxWidth="lg" className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent className="flex h-fit py-2 px-6 mx-auto gap-3 rounded-full bg-primary/15 backdrop-blur-sm" justify="center">

                <NavbarItem>
                    <Link href="/" className="text-foreground text-sm hover:scale-95 transition-all">
                        Inicio
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#about-me" className="text-foreground text-sm hover:scale-95 transition-all">
                        Sobre mí
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#about-me" className="text-foreground text-sm hover:scale-95 transition-all">
                        Experiencia
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="#about-me" className="text-foreground text-sm hover:scale-95 transition-all">
                        Contacto
                    </Link>
                </NavbarItem>

                <ThemeSwitch className="hover:scale-95 transition-all" />

            </NavbarContent>


        </Navbar>
    );
}
