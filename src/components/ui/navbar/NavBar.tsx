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
        <Navbar isBlurred={false} maxWidth="full" className="absolute shadow" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <FramerMagnetic>
                    <Link href="/">
                        <p className={`${titleFont.className} text-xl font-bold`}>ImDamian<span className="text-secondary">Dev</span></p>
                    </Link>
                </FramerMagnetic>
            </NavbarBrand>
            <ThemeSwitch />
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-5" justify="center">
                <NavbarItem>
                    <Link href="/about" className="text-lg ml-3 hover:scale-105 transition-all">
                        <span className="text-secondary font-bold mr-1">_</ span>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyects" className="text-lg ml-3 hover:scale-105 transition-all">
                        <span className="text-secondary font-bold mr-1">_</ span>
                        Proyects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" className="text-lg ml-3 hover:scale-105 transition-all">
                        <span className="text-secondary font-bold mr-1">_</ span>
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu className="max-h-56 max-w-50 justify-center gap-y-5 pt-0 shadow-lg">
                {navItems.map((item) => (
                    <NavbarMenuItem key={`${item}`} className="flex justify-end">
                        <Link
                            href={item.href}
                            size="lg"
                            className="hover:scale-105 transition-all"
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
