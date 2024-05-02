import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Button, Col, Row } from 'react-bootstrap';
function Shops({ isShop = false }) {
    const [showMore, setShowMore] = useState(false);
    const getCurrentTime = () => {
        const currentTime = new Date();
        return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    };

    // Function to check if current time is between opening hours
    const isTimeBetween = (currentTime, openingHours) => {
        const [open, close] = openingHours.split(' to ');

        // Parse opening and closing times
        const openTimeParts = open.split(' ');
        const closeTimeParts = close.split(' ');

        // Extract hours and minutes
        let openHours = parseInt(openTimeParts[0].split(':')[0]);
        const openMinutes = parseInt(openTimeParts[0].split(':')[1]);
        let closeHours = parseInt(closeTimeParts[0].split(':')[0]);
        const closeMinutes = parseInt(closeTimeParts[0].split(':')[1]);

        // Adjust hours if it's PM
        if (openTimeParts[1] === 'PM' && openHours !== 12) {
            openHours += 12;
        }
        if (closeTimeParts[1] === 'PM' && closeHours !== 12) {
            closeHours += 12;
        }

        // Get current hours and minutes
        const currentHours = parseInt(currentTime.split(':')[0]);
        const currentMinutes = parseInt(currentTime.split(':')[1]);

        // Compare times
        const isOpen = (currentHours > openHours || (currentHours === openHours && currentMinutes >= openMinutes)) &&
            (currentHours < closeHours || (currentHours === closeHours && currentMinutes <= closeMinutes));

        return isOpen;
    };


    const currentTime = getCurrentTime();
    // Array of shop data
    const shopsData = [
        {
            id: 1,
            name: 'Baby Shop',
            address: 'Q2, Wood square, Beside, surat',
            openingHours: '12:30 PM to 6:30 PM',
            distance: '2 km',
            imgUrl: 'https://picsum.photos/150/80?random=1'
        },
        {
            id: 2,
            name: "McDonald's",
            address: 'A2536, square, Beside, surat',
            openingHours: '9:30 AM to 9:30 PM',
            distance: '5 km',
            imgUrl: 'https://picsum.photos/150/80?random=2'
        },
        {
            id: 3,
            name: 'Electronics',
            address: 'Q2543, Wood, Beside, surat',
            openingHours: '3:30 PM to 9:30 PM',
            distance: '2 km',
            imgUrl: 'https://picsum.photos/150/80?random=3'
        },
        {
            id: 4,
            name: 'Navin',
            address: 'C2453,da square, Beside, surat',
            openingHours: '8:30 AM to 4:30 PM',
            distance: '7 km',
            imgUrl: 'https://picsum.photos/150/80?random=4'
        },
        {
            id: 5,
            name: 'Bhatia',
            address: 'D2321, Wood, Beside, surat',
            openingHours: '4:30 AM to 8:30 PM',
            distance: '2 km',
            imgUrl: 'https://picsum.photos/150/80?random=5'
        },
        {
            id: 6,
            name: 'Sumul',
            address: 'C432, Wood square, surat',
            openingHours: '10:30 AM to 10:30 PM',
            distance: '1 km',
            imgUrl: 'https://picsum.photos/150/80?random=6'
        }
    ];

    return (
        <div className='container'>
            {
                !isShop ?
                    <>
                        <div className='title'>Choose what you are looking for</div>

                        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                            {shopsData.map(shop => (
                                <Col key={shop.id}>
                                    <div className='shops-list'>
                                        <div className='shops-list-img'>
                                            <img src={shop.imgUrl} alt={shop.name} />
                                        </div>
                                        <div className='shops-list-title'>{shop.name}</div>
                                        <div className='shops-title'>{shop.address}</div>
                                        <div className='shops-title shops-list-hours'>
                                            <WatchLaterIcon style={{ color: isTimeBetween(currentTime, shop.openingHours) ? 'green' : 'red' }} /> {shop.openingHours}
                                        </div>
                                        <div className='shops-list-location'><LocationOnIcon /> {shop.distance}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </>
                    :
                    <>
                        <div className='title ellipsis'>Shops NearBy You</div>
                        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                            {shopsData.slice(0, showMore ? shopsData.length : 1).map(shop => (
                                <Col key={shop.id}>
                                    <div className='shops-list'>
                                        <div className='shops-list-img'>
                                            <img src={shop.imgUrl} alt={shop.name} />
                                        </div>
                                        <div className='shops-list-title'>{shop.name}</div>
                                        <div className='shops-title'>{shop.address}</div>
                                        <div className='shops-title shops-list-hours'>
                                            <WatchLaterIcon style={{ color: isTimeBetween(currentTime, shop.openingHours) ? 'green' : 'red' }} /> {shop.openingHours}
                                        </div>
                                        <div className='shops-list-location'><LocationOnIcon /> {shop.distance}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {isShop && (
                            <Button className='mt-5' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</Button>
                        )}
                    </>
            }
        </div>
    );
}

export default Shops;
