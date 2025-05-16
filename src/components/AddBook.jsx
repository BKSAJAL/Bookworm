import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addBook } from "../feature/books/booksSilce";
import { v4 as uuidv4 } from "uuid";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, description, category, image, rating } = e.target;
    if (!title.value) alert("Title can't be empty");
    else if (!author.value) alert("Author can't be empty");
    else if (!description.value) alert("Description can't be empty");
    else if (!category.value) alert("Category can't be empty");
    else if (!image.value) alert("Cover image can't be empty");
    else if (rating.value < 1 || rating.value > 5)
      alert("Rating should be between 1 and 5");
    else {
      const newBook = {
        id: uuidv4(),
        title: title.value,
        author: author.value,
        description: description.value,
        category: category.value
          .toLowerCase()
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        image: URL.createObjectURL(image.files[0]),
        rating: rating.value,
      };
      dispatch(addBook(newBook));
      navigate("/books/all");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-lg p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-black/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6 text-whte"
      >
        <h2 className="text-2xl font-semibold text-center">
          📕 Add a New Book
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-4 py-2 rounded-lg bg-white text-black outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="author" className="font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="px-4 py-2 rounded-lg bg-white text-black outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="2"
            className="px-4 py-2 rounded-lg bg-white text-black outline-none resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="px-4 py-2 rounded-lg bg-white text-black outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cover-img" className="font-medium">
            Cover Image
          </label>
          <input
            type="file"
            id="cover-img"
            name="image"
            accept="image/*"
            className="file:bg-gray-600 outline-none file:text-white file:px-4 file:py-1 file:rounded-lg file:cursor-pointer bg-white text-black"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="rating" className="font-medium">
            Rating (1 - 5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            className="px-4 py-2 rounded-lg bg-white text-black outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full hover:cursor-pointer"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
