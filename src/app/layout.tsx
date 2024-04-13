import {ThemeProvider} from "@/components/theme-provider"

import type {Metadata} from "next";

import {Sora} from "next/font/google";
import "@/styles/globals.css";

import {cn} from "@/lib/utils";
import React, {ReactNode} from "react";
import {Providers} from "@/app/provider";

// import Footer from "@/components/Footer";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const font = Sora({subsets: ["latin"], variable: "--font-sora"});

export const metadata: Metadata = {
    title: "Dabena",
    description: "Sitio web de Dabena",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    const menuItems = [
        {
            name: 'Inicio',
            path: '/',
        },
        {
            name: 'Productos',
            path: '/productos',
        },
        {
            name: 'Puntos de venta',
            path: '/puntos-ventas',
        },
        {
            name: 'Quiero ser mayorista!',
            path: '/aplicacion-mayoristas',
        },
    ];

    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sora antialiased",
                font.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Providers>
                <Navbar menuItems={menuItems}/>
                {children}
                <Footer menuItems={menuItems} />
            </Providers>
        </ThemeProvider>
        </body>
        </html>
    );
}
