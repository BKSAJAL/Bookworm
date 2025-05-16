import React, { useEffect, useState } from "react";
import BookCards from "./BookCard";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const booksData = useSelector((state) => state.books.books);

  const handleSearch = () => {
    if (!search) return alert("Search field can't be empty");
    const books = booksData.filter(
      (ele) =>
        ele.title.toLowerCase().includes(search) ||
        ele.author.toLowerCase().includes(search)
    );
    setBooks(books);
  };

  useEffect(() => {
    if (category.toLowerCase() == "all") {
      return setBooks(booksData);
    }
    const books = booksData.filter(
      (ele) => ele.category.toLowerCase() == category.toLowerCase()
    );
    books[0] && setBooks(books);
  }, []);

  return (
    <div className="backdrop-blur-lg min-h-screen">
      <div className="text-center py-20">
        <input
          type="search"
          className="bg-white px-4 py-2 w-60 rounded-3xl outline-none"
          placeholder="Search by Title or Author"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <button
          onClick={handleSearch}
          className="hover:cursor-pointer ml-2 bg-gray-700 text-white px-4 py-2 rounded-3xl"
        >
          Search
        </button>
      </div>
      {books[0] ? (
        <BookCards books={books} />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-700 h-64 gap-2">
          <p className="text-5xl font-semibold">📙 No Books Found</p>
          <p className="text-lg font-normal">
            Try a different keyword or browse all books.
          </p>
        </div>
      )}
    </div>
  );
}

export default BrowseBooks;
