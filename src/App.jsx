import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function App() {
  const [categories, setCategories] = useState([]);
  const books = useSelector((state) => state.books.books);

  const navigate = useNavigate();

  useEffect(() => {
    const uniqueCategories = [...new Set(books.map((ele) => ele.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="backdrop-blur-xs">
      {/* welcome message */}
      <section className="h-96 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl">
          📚 Welcome to <span className="font-normal">Bookworm</span>
        </h1>
        <p className="text-sm sm:text-base">
          Your gateway to endless knowledge, anytime, anywhere.
        </p>
      </section>

      {/* unique categories */}
      <section className="flex mx-10 my-20 justify-start lg:justify-between flex-wrap gap-4">
        {categories.map((ele) => (
          <div
            onClick={() => navigate(`books/${ele}`)}
            key={ele}
            className="hover:scale-105 hover:cursor-pointer bg-gray-900 text-white py-2 px-4 rounded-3xl"
          >
            {ele}
          </div>
        ))}
      </section>
      {/* popular books cards */}
      <BookCard books={books.slice(0, 10)} />
    </div>
  );
}

export default App;
