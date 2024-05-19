'use client'
import { useState } from "react";

import { titleFont } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navItems } = siteConfig;

    return (
        <Navbar isBlurred={false} maxWidth="full" className="bg-slate-100 shadow-sm" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <p className={`${titleFont.className} text-2xl font-bold text-inherit`}>ImDamianDev</p>
            </NavbarBrand>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-5 text-primary-500 font-semibold" justify="center">
                <NavbarItem>
                    <Link href="/about" className="text-xl hover:scale-110 transition-all">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyects" className="text-xl hover:scale-110 transition-all">
                        Proyects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" className="text-xl hover:scale-110 transition-all">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu className="bg-slate-100 max-h-56 max-w-50 justify-center gap-4 pt-0 rounded-b-medium shadow-sm">
                {navItems.map((item) => (
                    <NavbarMenuItem key={`${item}`} className="flex justify-end">
                        <Link
                            href={item.href}
                            size="lg"
                        >
                            <p className="text-2xl text-primary-500">
                                {item.label}
                            </p>
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
