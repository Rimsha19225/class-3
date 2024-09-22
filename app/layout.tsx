
import "./globals.css";
import NavBar from "./navBar/page"
import Footer from "./footer"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
