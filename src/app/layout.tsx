import {ThemeProvider} from "@/components/theme-provider"

import type {Metadata} from "next";

import {Sora} from "next/font/google";
import "@/styles/globals.css";

import {cn} from "@/lib/utils";
import React, {ReactNode} from "react";

const font = Sora({subsets: ["latin"], variable: "--font-sora"});

export const metadata: Metadata = {
    title: "Dabena",
    description: "Sitio web de Dabena",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sora antialiased", // Use "font-sora" class
                font.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
