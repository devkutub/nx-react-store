import { Link } from 'react-router-dom';
import styles from './react-router-link.module.css';

/* eslint-disable-next-line */
export interface ReactRouterLinkProps {
  title: string;
  path: string;
}

export function ReactRouterLink(props: ReactRouterLinkProps) {
  return (
    <div className={styles['container']} style={{ padding: '8px 0' }}>
      <Link to={props.path} style={{ color: "blue", padding: 2 }}>{props.title}</Link>
    </div>
  );
}

export default ReactRouterLink;
