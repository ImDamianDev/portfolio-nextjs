'use client'
import { useState } from "react";

import { titleFont } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";
import { FramerMagnetic } from "../framer-magnetic/FramerMagnetic";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navItems } = siteConfig;

    return (
        <Navbar isBlurred={false} maxWidth="full" className="shadow-xl shadow-background" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/" className="flex flex-row items-baseline">
                    <p className={`${titleFont.className} text-xl font-bold`}>ImDamian</p>
                    <FramerMagnetic>
                        <p className="text-xl font-semibold text-secondary">Dev</p>
                    </FramerMagnetic>
                </Link>
            </NavbarBrand>

            <ThemeSwitch className="hover:scale-95 transition-all" />
            
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />

            <NavbarContent className="hidden sm:flex gap-5" justify="center">
                <NavbarItem>
                    <Link href="/" className="ml-3  hover:scale-95 transition-all">
                        <span className="text-secondary font-bold mr-1">_</ span>
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" className="ml-3 hover:scale-95 transition-all">
                        <span className="text-secondary font-bold mr-1">_</ span>
                        Sobre mí
                    </Link>
                </NavbarItem>
            </NavbarContent>


            <NavbarMenu className="sm:hidden flex flex-col justify-center rounded-md pb-28 gap-y-8">
                {navItems.map((item) => (
                    <NavbarMenuItem key={`${item}`} className="flex bg-secondary/5 hover:bg-secondary/15 hover:scale-95 transition-all">
                        <Link
                            href={item.href}
                            size="lg"
                            className="w-full py-2 justify-center"
                        >
                            <span className="text-secondary font-bold mr-1">_</ span>
                            <p className="text-xl">
                                {item.label}
                            </p>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>


        </Navbar>
    );
}
