import {Bookshelf} from "./bookshelf";

export function User(id, name, bookshelf){
    this.id = id;
    this.name = name;
    this.bookshelf = new Bookshelf(
        bookshelf.id,
        bookshelf.content
    );
}