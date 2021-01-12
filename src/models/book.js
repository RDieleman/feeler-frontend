//Book info
export function Book(title, overview, isbn, imageUrl){
    this.title = title;
    this.overview = (overview) ? overview : "No description found.";
    this.isbn = isbn;
    this.imageUrl = imageUrl;
}