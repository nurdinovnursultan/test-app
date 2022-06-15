import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveEditedBook } from '../helpers/utils';
import { editBook } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const EditBookPage = () => {
    const dispatch = useDispatch()
    const bookToEdit = useSelector(state => state.bookToEdit)

    const { id } = useParams()
    const [editedBook, setEditedBook] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(editBook(id))
    }, [])

    useEffect(() => {
        setEditedBook(bookToEdit)
    }, [bookToEdit])

    const handleChange = (e) => {
        let object = {
            ...editedBook,
            [e.target.name]: e.target.value
        }
        setEditedBook(object)
    }

    return (
        <div className="cards">
            <div className="container">
                <h1 className="title">Редактировать книгу</h1>
                {
                    editedBook ? (
                        <div className="add__block">
                            <div className="add__block-inputs">
                                <input type="text" value={editedBook.title} name="title" placeholder="Название" onChange={handleChange} />
                                <input type="text" value={editedBook.author} name="author" placeholder="Автор" onChange={handleChange} />
                                <input type="text" value={editedBook.category} name="category" placeholder="Категория" onChange={handleChange} />
                                <input type="text" value={editedBook.image} name="image" placeholder="Ссылка на фото" onChange={handleChange} />
                                <button className="add__button" onClick={() => {
                                    if (!editedBook.title.trim() ||
                                        !editedBook.author.trim() ||
                                        !editedBook.category.trim() ||
                                        !editedBook.image.trim()) {
                                        alert("Заполните все поля!")
                                        return
                                    }
                                    saveEditedBook(editedBook)
                                    navigate("/")
                                }}>
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

export default EditBookPage;