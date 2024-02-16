import React from "react";
import ReactDom from "react-dom";

import { books } from "./Books"
import BooksTemplate from "./BooksTemplate";
import "./index.css";

function BookList() {

    // books.map((book) => {
    //     console.log(books)
    //     return (
    //         <div><Books img={books.img} /></div>
    //     )
    // })
    // const names = ["harry", "jane", 'Faisal'];

    // let newNames = names.map((name) => name)

    return (
        // <section className="booklist">{names.map((name) => <h1 key={name}>{name}</h1>)}</section>
        <>
            <h1 className="heading">SHAZY BOOK STORE</h1>
            <section className="bookList">
                {books.map((book) => <BooksTemplate key={book.id} {...book}></BooksTemplate>)}</section></>
        // <section className="bookList">{books.map((book) => <Books img={book.img} title={book.title} author={book.author}></Books>)}</section>

    )
}

ReactDom.render(<BookList />, document.getElementById("root"));
