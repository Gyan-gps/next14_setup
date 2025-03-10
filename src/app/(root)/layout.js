import Footer from '../components/common/Footer'
import Headers from '../components/common/Header'
import '../globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  )
}
