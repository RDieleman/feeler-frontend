import React from "react";
import "./book-overview.styles.css";

export const BookOverview = ({books, handleOnClick}) => {

    return (
        <div className="book-overview-container">
            {books.map((b, i) => {
                return <div
                    onClick={() => handleOnClick(b)}
                    key={i}
                >
                    <img src={b.imageUrl} alt={b.title}/>
                </div>
            })}
        </div>
    )
}