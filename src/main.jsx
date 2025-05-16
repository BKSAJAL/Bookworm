import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Header from "./components/Header.jsx";
import NotFound from "./components/404NotFound.jsx";
import BookDetails from "./components/BookDetails.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBook from "./components/AddBook.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<App />} />
            <Route path="/books/:category" element={<BrowseBooks />} />
            <Route path="/add-book" element={<AddBook />} />
          </Route>
          <Route path="/book-details/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
