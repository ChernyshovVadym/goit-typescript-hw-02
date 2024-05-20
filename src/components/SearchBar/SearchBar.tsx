import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";


interface SerchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SerchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Can not be empty");
    }
     onSearch(query);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          required
          onChange={handleChange}
          className={css.input}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
