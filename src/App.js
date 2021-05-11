import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/products" component={ProductListPage} />
      <Footer />
    </>
  );
}

export default App;
