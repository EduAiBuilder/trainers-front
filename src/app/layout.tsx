"use client"

import Header from "@/components/Header/Header";
import {ContextWrapper} from "@/context";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ContextWrapper>
            <Header/>
            {children}
        </ContextWrapper>
        </body>
        </html>
    )
}
