import React from "react";
import { useNavigate } from "react-router";

function BookCard({ books }) {
  const navigate = useNavigate();

  return (
    <section className="flex justify-start m-10 gap-8 flex-wrap hover:cursor-pointer">
      {books.map((ele) => {
        return (
          <div
            onClick={() => navigate(`/book-details/${ele.id}`)}
            className="book-card rounded-xl overflow-hidden hover:scale-105 relative"
            key={ele.id}
          >
            <img className="h-96 w-64" src={ele.image} alt={ele.title} />
            <p className="bg-black opacity-80 pb-2 pt-1 text-white absolute w-full text-center bottom-0">
              {ele.title}
              <i className="block text-xs">✍🏼 {ele.author}</i>
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default BookCard;
