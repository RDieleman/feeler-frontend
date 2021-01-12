//Bookshelf
import {BookshelfItem} from "./bookshelfItem";

export function Bookshelf(id, content){
    this.id = id;
    this.content = [];
    content.forEach(i => {
        this.content.push(
            new BookshelfItem(
                i.id,
                i.isbn,
                i.status
            )
        );
    })
}