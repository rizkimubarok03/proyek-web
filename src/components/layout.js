import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Link } from "gatsby"
import tentangkami from "../pages/tentang kami"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between justify-around item-center bg-gray-600 lg:px-20 sm:px-6 py-8 text-gray-100">
        <ul className="flex space-x-20">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/produk">Produk</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>
      </nav>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
