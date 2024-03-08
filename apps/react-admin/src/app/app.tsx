// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

// import shared files
import { ProductList } from "@nx-react-node/products";

function Home() {
  return (
    <>
      <h1>React Admin Home Page</h1>
      <Link to="/products" style={{ color: "blue", padding: 2 }}>Product List Page</Link>
    </>
  )
}

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductList />} />
    </Routes>
  );
}

export default App;
