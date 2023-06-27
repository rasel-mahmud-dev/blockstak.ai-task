import './globals.css'
import "src/styles/main.scss"
import {DM_Sans} from 'next/font/google'

const inter = DM_Sans({weight: "400", subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>

        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
