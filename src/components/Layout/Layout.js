import * as React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./GlobalStyles.css"

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout