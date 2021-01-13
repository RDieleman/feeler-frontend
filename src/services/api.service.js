import {properties} from "../properties";
import {Book} from "../models/book";
import {Bookshelf} from "../models/bookshelf";
import {User} from "../models/user";

//todo: Implement production backend
/*
    Api service that contains all the api calls to the backend.
    The backend url and endpoints are defined in the properties file.

    The retrieved data is converted to predefined models to abstract the api.
 */

export const handleGetBook = async (isbn) =>{
    return fetch( `${properties.backendUrl}/book/${isbn}`)
        .then(response => response.json())
        .then(data => {
            return new Book(
                data.title,
                data.overview,
                data.isbn13,
                data.imageUrl
            )
        });
}

export const handleGetBookshelf = async (dto) =>{
    return fetch(`${properties.backendUrl}/bookshelf`, {
        method: 'POST',
        body: JSON.stringify(dto),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            return new Bookshelf(
                data.id,
                data.content
            )
        });
}

export const handleAddBook = async (dto) =>{
    return fetch(`${properties.backendUrl}/bookshelf`, {
        method: 'PUT',
        body: JSON.stringify(dto),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            return new Bookshelf(
                data.id,
                data.content
            )
        });
}

export const handleRemoveBook = async (dto) =>{
    return fetch(`${properties.backendUrl}/bookshelf`, {
        method: 'DELETE',
        body: JSON.stringify(dto),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            return new Bookshelf(
                data.id,
                data.content
            )
        });
}

export const handleUpdateBook = async (dto) =>{
    return fetch(`${properties.backendUrl}/bookshelf`, {
        method: 'PATCH',
        body: JSON.stringify(dto),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            return new Bookshelf(
                data.id,
                data.content
            )
        });
}

export const handleGetMoods = async () =>{
    return fetch(`${properties.backendUrl}/mood`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export const handleGetUser = async (id) =>{
    return fetch(`${properties.backendUrl}/user/${id}`)
        .then(response => response.json())
        .then(data => {
            return new User(
                data.id,
                data.name,
                data.bookshelf
            );
        });
}

export const handleExplore = async (mood, page) =>{
    return fetch(`${properties.backendUrl}/explore/${mood}/${page}`, {
        method: 'GET'
    }).then(response => response.json())
        .then(data => {
            const books = [];
            data.forEach(b => {
                books.push(
                    new Book(
                        b.title,
                        b.overview,
                        b.isbn13,
                        b.imageUrl
                    )
                )
            });
            return books;
        })
}