import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewBook } from '../helpers/utils';

const AddBooksPage = () => {
    const navigate = useNavigate()
    const [newBook, setNewBook] = useState({})

    const handleChange = (e) => {
        let object = {
            ...newBook,
            [e.target.name]: e.target.value
        }
        setNewBook(object)
    }

    return (
        <div className="cards">
            <div className="container">
                <h1 className="title">Добавить книгу</h1>
                <div className="add__block">
                    <div className="add__block-inputs">
                        <input type="text" name="title" placeholder="Название" onChange={handleChange} />
                        <input type="text" name="author" placeholder="Автор" onChange={handleChange} />
                        <input type="text" name="category" placeholder="Категория" onChange={handleChange} />
                        <input type="text" name="image" placeholder="Ссылка на фото" onChange={handleChange} />
                        <button className="add__button" onClick={() => {
                            if (!newBook.title.trim() ||
                                !newBook.author.trim() ||
                                !newBook.category.trim() ||
                                !newBook.image.trim()) {
                                alert("Заполните все поля!")
                                return
                            }
                            addNewBook({
                                title: newBook.title.trim(),
                                author: newBook.author.trim(),
                                category: newBook.category.trim(),
                                image: newBook.image.trim()
                            })
                            navigate("/")
                        }}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooksPage;