import React from 'react'
import NavbarComponent from '../../components/Navbar'
import AllServices from './AllServices'
import "./index.scss"
import Category from './Category'
import Shops from './Shops'
import Banner from './Banner'
import Deals from './Deals'
function index() {
    return (
        <>
            <AllServices />
            <Category />
            <Shops />
            <Banner />
            <Deals />
        </>
    )
}

export default index