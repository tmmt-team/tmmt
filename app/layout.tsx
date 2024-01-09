import type { Metadata } from 'next'
import './globals.css'
import NavbarComp from '@/components/NavbarComp'
import FooterComp from '@/components/FooterComp'


export const metadata: Metadata = {
  title: 'Velocity Click',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        {/* <!-- Standard favicon --> */}
        <link rel="icon" href="/image/favicon.ico" sizes="any" />

        {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
        <link rel="apple-touch-icon" sizes="120x120" href="/image/apple-touch-icon.png" />

        {/* <!-- Android Chrome Icon --> */}
        <link rel="icon" type="image/png" sizes="192x192" href="/image/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/image/android-chrome-384x384.png" />

        {/* <!-- Recommended favicon size for general browser display --> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />

        {/* <!-- The Web App Manifest --> */}
        <link rel="manifest" href="/image/site.webmanifest" />

        {/* <!-- Safari Icon --> */}
        <link rel="mask-icon" href="/image/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

      </head>
      <body>
        <NavbarComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
