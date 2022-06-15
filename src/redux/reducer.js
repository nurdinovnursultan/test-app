import { EDIT_BOOK, FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, GET_AUTHORS, GET_BOOKS, GET_CATEGORIES, GET_WISH_LIST } from "./types"

const initialState = {
    books: [],
    bookToEdit: {},
    authors: [],
    categories: [],
    filterByAuthor: [],
    filterByCategory: [],
    wishList: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.payload }
        case EDIT_BOOK:
            return { ...state, bookToEdit: action.payload }
        case GET_AUTHORS:
            return { ...state, authors: action.payload }
        case FILTER_BY_AUTHOR:
            return { ...state, filterByAuthor: action.payload }
        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        case FILTER_BY_CATEGORY:
            return { ...state, filterByCategory: action.payload }
        case GET_WISH_LIST:
            return { ...state, wishList: action.payload }
        default:
            return state
    }
}