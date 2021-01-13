export function AddBookDTO(bookshelfId, isbn){
    this.bookshelfId = bookshelfId;
    this.isbn13 = isbn;
}

export function GetBookshelfDTO(bookshelfId){
    this.bookshelfId = bookshelfId;
}

export function RemoveBookDTO(bookshelfId, isbn){
    this.bookshelfId = bookshelfId;
    this.isbn13 = isbn;
}

export function UpdateBookDTO(bookshelfId, isbn, status){
    this.bookshelfId = bookshelfId;
    this.isbn13 = isbn;
    this.status = status;
}

