import axios from "axios";
import { API } from "../redux/api";

export const addNewBook = async (book) => {
    await axios.post(API, book)
}

export const saveEditedBook = async (book) => {
    await axios.patch(`${API}/${book.id}`, book)
}

export const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`)
}

export const addBookToWishList = (book) => {
    let wishList = JSON.parse(localStorage.getItem('wish'))
    wishList.push(book)
    localStorage.setItem('wish', JSON.stringify(wishList))
}

export const deleteBookFromWishList = (id) => {
    let wishList = JSON.parse(localStorage.getItem('wish'))
    let updatedWishList = wishList.filter(item => item.id !== id)
    localStorage.setItem('wish', JSON.stringify(updatedWishList))
}