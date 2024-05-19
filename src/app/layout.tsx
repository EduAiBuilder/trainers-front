"use client"

import Header from "@/components/Header/Header";


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
      <footer>Footer</footer>
      </body>
    </html>
  )
}
