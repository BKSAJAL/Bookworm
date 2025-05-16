import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import NotFound from "./404NotFound";

function BookDetails() {
  const [book, setBook] = useState({});
  const booksData = useSelector((state) => state.books.books);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const book = booksData.find((ele) => ele.id == id);
    setBook(book);
  }, []);

  if (!book) return <NotFound />;

  return (
    <div className="relative backdrop-blur-lg bg-black/40 min-h-screen text-white flex flex-col items-center justify-center p-6 gap-4">
      <img
        src={book.image}
        alt={book.title}
        className="w-60 h-auto rounded shadow-md"
      />
      <p className="text-3xl font-semibold">{book.title}</p>
      <i className="text-lg text-gray-300">✍🏼 {book.author}</i>
      <i className="text-center max-w-xl text-base">{book.description}</i>
      <div className="flex items-center gap-2 text-lg">
        <span className="capitalize bg-gray-700 px-3 py-1 rounded-full">
          {book.category}
        </span>
        <span>⭐ {book.rating}</span>
      </div>
      <button
        onClick={() => navigate("/books/all")}
        className="absolute top-5 right-5 px-3 py-2 text-lg bg-gray-700 rounded-lg hover:cursor-pointer hover:bg-gray-600"
      >
        👈🏼 Back to Browse
      </button>
    </div>
  );
}

export default BookDetails;
