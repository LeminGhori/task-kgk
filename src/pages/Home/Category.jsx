import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { category } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

function Category() {
    const [categoryList, setCategoryList] = React.useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            axios.get('https://fakestoreapi.com/products/categories').then((res) => {
                setCategoryList(res.data);
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
    return (
        <div className='container '>
            <div className='title'>
                Choose you are looking for
            </div>
            <div className='list-container'>
                {
                    categoryList?.slice(0, 8)?.map((item, index) => {
                        return (<>
                            <div className='category-list' onClick={() => {
                                dispatch(category(item));
                                navigate("/shop");
                            }}>
                                <div className='category-list-img'>
                                    <img src={`https://picsum.photos/100/100?random=${index}`} />
                                </div>
                                <div className='category-list-title'>{item}</div>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    )
}

export default Category