import axios from "axios"
import { API } from "./api"
import { EDIT_BOOK, FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, GET_AUTHORS, GET_BOOKS, GET_CATEGORIES, GET_WISH_LIST } from "./types"

export function getBooks() {
    return async (dispatch) => {
        const { data } = await axios(API)
        dispatch({
            type: GET_BOOKS,
            payload: data
        })
    }
}

export function editBook(id) {
    return async (dispatch) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: EDIT_BOOK,
            payload: data
        })
    }
}

export function getAuthors() {
    return async (dispatch) => {
        const { data } = await axios(API)
        let authors = []
        data.forEach(item => authors.push(item.author))
        const updatedAuthors = []
        authors.forEach(author => {
            let checkAuthor = updatedAuthors.filter(element => element === author)
            if (checkAuthor.length === 0) {
                updatedAuthors.push(author)
            }
        })
        dispatch({
            type: GET_AUTHORS,
            payload: updatedAuthors
        })
    }
}

export function filterByAuthor(author) {
    return async (dispatch) => {
        const { data } = await axios(`${API}?author=${author}`)
        dispatch({
            type: FILTER_BY_AUTHOR,
            payload: data
        })
    }
}

export function getCategories() {
    return async (dispatch) => {
        const { data } = await axios(API)
        let categories = []
        data.forEach(item => categories.push(item.category))
        const updatedCategories = []
        categories.forEach(category => {
            let checkCategory = updatedCategories.filter(element => element === category)
            if (checkCategory.length === 0) {
                updatedCategories.push(category)
            }
        })
        dispatch({
            type: GET_CATEGORIES,
            payload: updatedCategories
        })
    }
}

export function filterByCategory(category) {
    return async (dispatch) => {
        const { data } = await axios(`${API}?category=${category}`)
        dispatch({
            type: FILTER_BY_CATEGORY,
            payload: data
        })
    }
}

export function getWishList() {
    return async (dispatch) => {
        let wishList = await JSON.parse(localStorage.getItem('wish'))
        if (!wishList) {
            wishList = []
        }
        localStorage.setItem('wish', JSON.stringify(wishList))
        dispatch({
            type: GET_WISH_LIST,
            payload: wishList
        })
    }
}