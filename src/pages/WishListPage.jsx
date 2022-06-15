import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWishList } from '../redux/actions';
import BooksCard from '../components/booksCard/BooksCard';

const WishListPage = () => {
    const dispatch = useDispatch()
    const wishList = useSelector(state => state.wishList)

    useEffect(() => {
        dispatch(getWishList())
    }, [])

    return (
        <div className="cards">
            <div className="container">
                <h1 className="title">Количество книг: {wishList.length}</h1>
                <div className="cards__block">
                    {
                        wishList ? (
                            wishList.map(item => <BooksCard book={item} key={item.id} />)
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default WishListPage;