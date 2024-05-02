import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./index.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button, Col, Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import axios from 'axios';
import Shops from '../Home/Shops';
import { addToCart, removeFromCart, decreaseQuantity } from '../../redux/actions';
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

function Index() {
    const productData = useSelector((state) => state.product);
    const [isFilter, setIsFilter] = useState({
        sort: true,
        price: true
    });
    const dispatch = useDispatch();
    const setToggal = (toggle) => {
        setIsFilter({ ...isFilter, [toggle]: !isFilter[toggle] });
    };
    const [shopsData, setShopsData] = useState([]);
    const [copyShopsData, setCopyShopsData] = useState([]);
    const fetchData = async () => {
        try {
            let api = '';
            if (productData.setCategory == 'All') {
                api = 'https://fakestoreapi.com/products';
            } else {
                api = `https://fakestoreapi.com/products/category/${productData.setCategory}`
            }
            axios.get(api).then((res) => {
                setShopsData(res.data);
                setCopyShopsData(res.data)
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const filterData = (criteria) => {
        let filteredData = [...copyShopsData];

        switch (criteria) {
            case 'Price: Low to High':
                filteredData.sort((a, b) => a.price - b.price);
                break;
            case 'Price: High to Low':
                filteredData.sort((a, b) => b.price - a.price);
                break;
            case 'Rating: Low to Hign':
                filteredData.sort((a, b) => a.rating.rate - b.rating.rate);
                break;
            case 'Rating: Hign to Low':
                filteredData.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case '0 < ₹250':
                filteredData = copyShopsData.filter(item => item.price < 250);
                break;
            case '₹251 < ₹500':
                filteredData = copyShopsData.filter(item => item.price > 250 && item.price < 500);
                break;
            case '₹501 < ₹1000':
                filteredData = copyShopsData.filter(item => item.price > 500 && item.price < 1000);
                break;
            case '₹1001 < ₹5000':
                filteredData = copyShopsData.filter(item => item.price > 1000 && item.price < 5000);
                break;
            default:
                break;
        }

        setShopsData(filteredData);
    };


    return (
        <div>
            <div className='header-category'>
                <div className='container d-flex justify-content-between'>
                    <div className='categorys-title-font'>{productData.setCategory}</div>
                    <div className='category-ranges'>
                        <div className='range-end'>50</div>
                        <div className='range-km'>
                            <div>1 km</div>
                            <div>50 km</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex '>
                <div className='all-catagory d-flex'>
                    <div>All Catagory</div>
                    <div>{">"}</div>
                    <div className='show-catagory'>{productData.setCategory}</div>
                </div>
            </div>
            <div className='container category-items filter-component'>
                <div className='filter'>
                    <div className='filter-titles'>Filters</div>
                    <div className='filter-item'>
                        <div className='filter-header d-flex justify-content-between' onClick={() => {
                            setToggal('sort');
                        }}>
                            <div>Sort  By</div>
                            <div>
                                {isFilter?.sort ? <ArrowDropUpIcon />
                                    :
                                    <ArrowDropDownIcon />}
                            </div>
                        </div>
                        {
                            isFilter?.sort &&
                            <>
                                <div className='filter-items' onClick={() => { filterData('Price: Low to High') }}>Price: Low to High</div>
                                <div className='filter-items' onClick={() => { filterData('Price: Hign to Low') }}>Price: Hign to Low</div>
                                <div className='filter-items' onClick={() => { filterData('Rating: Low to Hign') }}>Rating: Low to Hign</div>
                                <div className='filter-items' onClick={() => { filterData('Rating: Hign to Low') }}>Rating: Hign to Low</div>                            </>
                        }
                    </div>
                    <div className='filter-item '>
                        <div className='filter-header d-flex justify-content-between' onClick={() => {
                            setToggal('price');
                        }}>
                            <div>
                                Price
                            </div>
                            <div>{isFilter?.price ? <ArrowDropUpIcon />
                                :
                                <ArrowDropDownIcon />}
                            </div>
                        </div>
                        {
                            isFilter?.price &&
                            <>
                                <div className='filter-items' onClick={() => filterData('0 < ₹250')}>{"0 < ₹250"}</div>
                                <div className='filter-items' onClick={() => filterData('₹251 < ₹500')}>{"₹251 < ₹500"}</div>
                                <div className='filter-items' onClick={() => filterData('₹501 < ₹1000')}>{"₹501 < ₹1000"}</div>
                                <div className='filter-items' onClick={() => filterData('₹1001 < ₹5000')}>{"₹1001 < ₹5000"}</div>
                            </>
                        }
                    </div>
                </div>
                <div className='filter-product'>
                    <div className='list-container'>
                        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                            {shopsData?.map(shop => (
                                <Col key={shop.id} className='mt-4'>
                                    <div className='deals-list'>
                                        <div className='deals-sale'>Sale</div>
                                        <div className='shops-list-img'>
                                            <img src={shop.image} alt={shop.name} />
                                        </div>
                                        <div className='deals-list-title'>{shop.title}</div>
                                        <StyledRating
                                            name="highlight-selected-only"
                                            value={shop?.rating
                                                ?.rate}
                                            IconContainerComponent={IconContainer}
                                            readOnly
                                        />
                                        <div className='shops-list-price'>
                                            <span className='low-price'>₹ {shop.price}</span>
                                        </div>
                                        <div className='add-cart'>
                                            <Button onClick={() => dispatch(addToCart(shop))}>Add to Cart</Button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <div className='filter-shop'>
                    <Shops isShop={true} />
                </div>
            </div>
        </div>
    )
}

export default Index