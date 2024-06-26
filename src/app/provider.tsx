// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ReactNode} from "react";

export function Providers({children}: Readonly<{ children: ReactNode }>) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}