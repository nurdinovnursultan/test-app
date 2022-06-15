import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AddBooksPage from "./pages/AddBooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import CategoriesPage from "./pages/CategoriesPage";
import EditBookPage from "./pages/EditBookPage";
import MainPage from "./pages/MainPage";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="add" element={<AddBooksPage />} />
          <Route path="author" element={<AuthorsPage />} />
          <Route path="category" element={<CategoriesPage />} />
          <Route path="edit/:id" element={<EditBookPage />} />
          <Route path="wish" element={<WishListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;