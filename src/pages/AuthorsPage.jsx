import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FilterByAuthor from '../components/filterByAuthor/FilterByAuthor';
import { getAuthors } from '../redux/actions';

const AuthorsPage = () => {
    const dispatch = useDispatch()
    const authors = useSelector(state => state.authors)

    useEffect(() => {
        dispatch(getAuthors())
    }, [])

    return (
        <div className="cards">
            <div className="container">
                <FilterByAuthor array={authors} />
            </div>
        </div>
    );
};

export default AuthorsPage;