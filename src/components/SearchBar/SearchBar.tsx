import { useState } from "react";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
const SearchBar = ({ onSearchChange }) => {
  const [value, setValue] = useState("");
  const handeleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(value);
  };
  return (
    <header className={s.header}>
      <form onSubmit={handeleSubmit} className={s.form}>
        <button type="submit" className={s.searchBtn}>
          <CiSearch />
        </button>
        <input
          className={s.searchBar}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
