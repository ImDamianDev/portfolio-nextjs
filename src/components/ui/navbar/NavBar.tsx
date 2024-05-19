
import { titleFont } from "@/config/fonts";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export const NavBar = () => {
    return (
        <Navbar isBlurred={false} maxWidth="full" className="bg-transparent">
            <NavbarBrand>
                <p className={`${titleFont.className} text-2xl font-bold text-inherit`}>ImDamianDev</p>
            </NavbarBrand>
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
        </Navbar>
    );
}
