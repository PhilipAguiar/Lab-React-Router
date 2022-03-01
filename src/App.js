import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductItem from "./components/ProductItem/ProductItem";
import productItems from "./data/products.json";

function App() {
  const username = "Last Minute Shopper"
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact render={() => <HomePage username ={username} />} />
        <Route path="/contact" render={() => <ContactPage username ={username}  />} />
        <Route path="/products" render={() => <ProductsPage productItems={productItems} />} />
        <Route path="/product/:id" component={ProductItem} />;
      </Switch>
    </BrowserRouter>
  );
}

export default App;
