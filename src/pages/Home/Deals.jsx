import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Col, Row } from 'react-bootstrap';
const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

function Deals() {
    // Array of shop data
    const shopsData = [
        {
            id: 1,
            name: 'Big Spicy paneer',
            distance: '2 km',
            highPrice: 203,
            lowPrice: 120,
            imgUrl: 'https://picsum.photos/100/100?random=1',
            rating: 4,
        },
        {
            id: 2,
            name: "McDonald's panner",
            distance: '5 km',
            highPrice: 876,
            lowPrice: 500,
            imgUrl: 'https://picsum.photos/100/100?random=2',
            rating: 3,
        },
        {
            id: 3,
            name: 'mexican Cheesy',
            distance: '2 km',
            highPrice: 800,
            lowPrice: 699,
            imgUrl: 'https://picsum.photos/100/100?random=3',
            rating: 5,
        },
        {
            id: 4,
            name: 'Navin Laptop',
            distance: '7 km',
            highPrice: 1000,
            lowPrice: 899,
            imgUrl: 'https://picsum.photos/100/100?random=4',
            rating: 1,
        },
        {
            id: 5,
            name: 'Samsung Chrome N3 pro',
            distance: '2 km',
            highPrice: 5300,
            lowPrice: 4999,
            imgUrl: 'https://picsum.photos/100/100?random=5',
            rating: 2,
        },
        {
            id: 6,
            name: 'mac Book pro altra',
            distance: '1 km',
            highPrice: 1123,
            lowPrice: 999,
            imgUrl: 'https://picsum.photos/100/100?random=6',
            rating: 5,
        }
    ];

    return (
        <div className='container mb-5 deal'>
            <div className='title'>Deal of the Day</div>
            <div className='list-container'>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                    {shopsData.slice(0, 5).map(shop => (
                        <Col key={shop.id}>
                            <div className='deals-list'>
                                <div className='deals-sale'>Sale</div>
                                <div className='shops-list-img'>
                                    <img src={shop.imgUrl} alt={shop.name} />
                                </div>
                                <div className='deals-list-title'>{shop.name}</div>
                                <StyledRating
                                    name="highlight-selected-only"
                                    value={shop.rating}
                                    IconContainerComponent={IconContainer}
                                    readOnly
                                />
                                <div className='shops-list-location'><LocationOnIcon /> {shop.distance}</div>
                                <div className='shops-list-price'>
                                    <span className='high-price'>
                                        <del>₹ {shop.highPrice}</del>
                                    </span>{" "}-{" "}
                                    <span className='low-price'>₹ {shop.lowPrice}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Deals;
