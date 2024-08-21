import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar_component from '../component/navBar/Navbar_component'
import Footer_component from '../component/footer/Footer_component'

const Container = () => {
    return (
        <div>
            {/* NAV BAR */}
            <Navbar_component />
            {/* END NAV BAR */}

            <Outlet />

            {/* FOOTER */}
            <Footer_component />
            {/* END FOOTER */}
        </div>
    )
}

export default Container
