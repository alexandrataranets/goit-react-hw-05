import css from './SearchBar.module.css';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ value, onChange, handleSubmit }) {
  return (
    <header className={css.container}>
      <form onSubmit={e => handleSubmit(e, value)} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
        />
        <button className={css.btn} type="submit">
          <IoSearch size="20" color="rgb(46, 112, 234)" />
        </button>
      </form>
    </header>
  );
}