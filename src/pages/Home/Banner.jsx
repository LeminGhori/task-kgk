import React from 'react'
import BanneImage from "../../assets/images/banner.webp"
function Banner() {
    return (
        <div className='container'>
            <div className='banne-container'>
                <img src={BanneImage} alt='Banner' className='banne-image' />
            </div>
        </div>
    )
}

export default Banner