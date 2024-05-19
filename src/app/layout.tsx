"use client"

import Header from "@/components/Header/Header";
import {Grid} from "@mui/material";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
            {children}
        </body>
        </html>
    )
}
