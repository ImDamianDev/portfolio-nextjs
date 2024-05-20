'use client'
import { useState } from "react";

import { titleFont } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navItems } = siteConfig;

    return (
        <Navbar isBlurred={false} maxWidth="full" className="shadow-sm" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <p className={`${titleFont.className} text-primary text-2xl font-bold text-inherit`}>ImDamian<span className="text-secondary">Dev</span></p>
            </NavbarBrand>
            <ThemeSwitch />
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-5 text-primary font-semibold" justify="center">
                <NavbarItem>
                    <Link href="/about" className="text-lg ml-3 hover:scale-110 transition-all">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyects" className="text-lg ml-3 hover:scale-110 transition-all">
                        Proyects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" className="text-lg ml-3 hover:scale-110 transition-all">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu className="max-h-56 max-w-50 justify-center gap-4 pt-0 rounded-b-medium shadow">
                {navItems.map((item) => (
                    <NavbarMenuItem key={`${item}`} className="flex justify-end">
                        <Link
                            href={item.href}
                            size="lg"
                        >
                            <p className="text-2xl text-primary">
                                {item.label}
                            </p>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
