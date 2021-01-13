//Bookshelf
import {BookshelfItem} from "./bookshelfItem";

export function Bookshelf(id, content){
    this.id = id;
    this.content = [];
    content.forEach(i => {
        this.content.push(
            new BookshelfItem(
                i.id,
                i.isbn13,
                i.status
            )
        );
    })
    this.getRead = () =>{
        const items = [];
        this.content.forEach(i => {
            if (i.status === "READ") {
                items.push(i);
            }
        });
        return items;
    }

    this.getUnread = () =>{
        const items = [];
        this.content.forEach(i => {
            if (i.status === "UNREAD") {
                items.push(i);
            }
        });
        return items;
    }

    this.getReading = () =>{
        const items = [];
        this.content.forEach(i => {
            if (i.status === "READING") {
                items.push(i);
            }
        });
        return items;
    }
}