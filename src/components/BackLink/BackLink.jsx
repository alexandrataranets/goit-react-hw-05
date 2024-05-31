import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export default function BackLink({ to, children }) {
  return (
    <Link to={to} className={css.link}>
      <IoIosArrowBack size="20" />
      {children}
    </Link>
  );
}