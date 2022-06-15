import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigation = [
        {
            path: "/",
            name: "Главная"
        },
        {
            path: "/add",
            name: "Добавить"
        },
        {
            path: "/author",
            name: "Авторы"
        },
        {
            path: "/category",
            name: "Категории"
        },
        {
            path: "/wish",
            name: "Wish List"
        },
    ]

    const [state, setState] = useState(0)

    return (
        <div className="header">
            <div className="container">
                <div className="header__body">
                    {
                        navigation.map((item, index) =>
                            <div className={state === index ? 'active' : 'default'} onClick={() => setState(index)} key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;