import React from 'react';
import './BooksCard.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { addBookToWishList, deleteBook, deleteBookFromWishList } from '../../helpers/utils';
import { getWishList } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BooksCard = ({ book }) => {
    const dispatch = useDispatch()
    const wishList = useSelector(state => state.wishList)

    const checkBookInWishList = wishList.some(item => item.id === book.id)

    const navigate = useNavigate()

    return (
        <div className="card">
            <div className="card__image">
                <img src={book.image} alt="#" />
            </div>
            <div className="card__title">
                <h1>{book.title}</h1>
                <div className="card__title-info">
                    <h2>{book.author}</h2>
                    <h3>{book.category}</h3>
                </div>
            </div>
            <div className="card__buttons">
                {
                    checkBookInWishList ?
                        <IconButton onClick={() => {
                            deleteBookFromWishList(book.id)
                            dispatch(getWishList())
                        }}>
                            <BookmarkIcon />
                        </IconButton>
                        :
                        <IconButton onClick={() => {
                            addBookToWishList(book)
                            dispatch(getWishList())
                        }}>
                            <BookmarkBorderIcon />
                        </IconButton>
                }
                <IconButton onClick={() => navigate(`/edit/${book.id}`)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteBook(book.id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default BooksCard;