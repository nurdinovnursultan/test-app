import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../../redux/actions';
import BooksCard from '../booksCard/BooksCard';

const FilterByCategory = ({ array }) => {
    const [filterItem, setFilterItem] = useState()
    const dispatch = useDispatch()
    const filterBooks = useSelector(state => state.filterByCategory)

    useEffect(() => {
        dispatch(filterByCategory(filterItem))
    }, [filterItem])

    return (
        <div className="filter">
            <div className="filter__buttons">
                {
                    array ? array.map((item, index) =>
                        <button className={filterItem === item ? "current" : "disable"}
                            key={index}
                            onClick={() => setFilterItem(item)}>
                            {item}
                        </button>) : null
                }
            </div>
            <h1 className="title">Количество книг: {filterBooks.length}</h1>
            <div className="cards__block">
                {
                    filterBooks ? (
                        filterBooks.map(item => <BooksCard book={item} key={item.id} />)
                    ) : null
                }
            </div>
        </div>
    );
};

export default FilterByCategory;