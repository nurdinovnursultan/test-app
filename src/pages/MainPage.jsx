import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getBooks } from '../redux/actions';
import BooksCard from '../components/booksCard/BooksCard';

const MainPage = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)

    useEffect(() => {
        dispatch(getBooks())
    }, [books])

    const [sortType, setSortType] = useState()

    const sortBooks = (arr) => {
        if (sortType === "a-z") {
            arr.sort(function (a, b) {
                if (a.title > b.title) {
                    return 1
                }
                if (a.title < b.title) {
                    return -1
                }
                return 0
            });
        }

        if (sortType === "z-a") {
            arr.sort(function (a, b) {
                if (a.title < b.title) {
                    return 1
                }
                if (a.title > b.title) {
                    return -1
                }
                return 0
            });
        }
    }

    sortBooks(books)

    return (
        <div className="cards">
            <div className="container">
                <h1 className="title">Количество книг: {books.length}</h1>
                <div className="cards__sort">
                    <span>Сортировка:</span>
                    <button className="cards__sort-button" onClick={() => setSortType("a-z")}>А-Я</button>
                    <button className="cards__sort-button" onClick={() => setSortType("z-a")}>Я-А</button>
                </div>
                <div className="cards__block">
                    {
                        books ? (
                            books.map(item => <BooksCard book={item} key={item.id} />)
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;