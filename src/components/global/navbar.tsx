"use client"

import React, { useState } from "react";
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";
import { DabenaLogoTEXT } from "@/components/svgs/dabena-logo";

// Define the type for menu items
interface MenuItem {
    name: string;
    path: string;
}

interface NavbarProps {
    menuItems: MenuItem[];
}

function Navbar({ menuItems }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Nav
            maxWidth={"full"}
            onMenuOpenChange={setIsMenuOpen}
            isBordered={true}
            shouldHideOnScroll={true}
        >
            <NavbarContent className="flex justify-between">
                <NavbarBrand>
                    <DabenaLogoTEXT />
                </NavbarBrand>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.name}-${index}`}>
                        <Link color="foreground" href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                            }
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Nav>
    );
}

// Other components remain unchanged

export default Navbar;
