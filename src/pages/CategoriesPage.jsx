import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FilterByCategory from '../components/filterByCategory/FilterByCategory';
import { getCategories } from '../redux/actions';

const CategoriesPage = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <div className="cards">
            <div className="container">
                <FilterByCategory array={categories} />
            </div>
        </div>
    );
};

export default CategoriesPage;