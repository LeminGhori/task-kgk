import React from 'react'
import ClothsImage from "../../assets/images/cloths.webp"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function AllServices() {
    return (
        <div className='container d-flex'>
            <div className='s1-content-container w-50'>
                <div className='s1-title'>
                    <div className='font-weight-bold'>We arre here to provide</div>
                    <div className='font-weight-bold'>{" "}all services.</div>
                </div>
                <div className='pt-2'>Company that provides local search for different services in india over the phone and online</div>
                <div>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '95%', margin: '5% 5% 5% 0', borderRadius: '50px' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search products anywhere in india"
                            inputProps={{ 'aria-label': 'search products anywhere in india' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <div className='s1-image-container w-50'>
                <img src={ClothsImage} alt='cloths' />
            </div>
        </div>
    )
}

export default AllServices