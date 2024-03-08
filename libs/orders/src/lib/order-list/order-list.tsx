// import { Link } from 'react-router-dom';
import styles from './order-list.module.css';
import { ReactRouterLink } from "@nx-react-node/shared-ui";

/* eslint-disable-next-line */
export interface OrderListProps { }

export function OrderList(props: OrderListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrderList!</h1>
      {/* <Link to="/" style={{ color: "blue", padding: 4 }}>Home Page</Link> */}
      <ReactRouterLink title='Home Page' path='/' />
    </div>
  );
}

export default OrderList;
