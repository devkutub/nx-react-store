// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Link, Route, Routes } from "react-router-dom";

// importing the component from the library
import { ProductList } from "@nx-react-node/products";
import { OrderList } from "@nx-react-node/orders";
import { ReactRouterLink } from "@nx-react-node/shared-ui";


function Home() {
  return (
    <>
      <h1>Welcome to React with NX</h1>
      {/* <Link to="/products" style={{ color: "blue", padding: 4 }}>Product List Page</Link>
      <Link to="/orders" style={{ color: "blue", padding: 4 }}>Orders List Page</Link> */}
      <ReactRouterLink title='Product List Page' path='/products' />
      <ReactRouterLink title='Order List Page' path='/orders' />
    </>
  )
}

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList />} />
      <Route path="/orders" element={<OrderList />} />
    </Routes>
  );
}

export default App;
