// import { Link } from 'react-router-dom';
import styles from './product-list.module.css';

import { ReactRouterLink } from "@nx-react-node/shared-ui";

/* eslint-disable-next-line */
export interface ProductListProps { }

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      {/* <Link to="/" style={{ color: "blue", padding: 4 }}>Home Page</Link> */}
      <ReactRouterLink title='Home Page' path='/' />
    </div>
  );
}

export default ProductList;
