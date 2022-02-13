import { useState } from "react";
import s from './SearchBar.module.css'

export default function SearchBar({onSubmit}) {
const [query, setQuery] = useState("");


  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim() === '') {
      alert(' SERGEY Pls enter what would you like to find')
      return;
    }
   onSubmit(query)
   setQuery("");    
    };
    
    return (
      <>
        <header className={s["Searchbar"]}>
          <form className={s["SearchForm"]} onSubmit={handleSubmit}>
            <button type="submit" className={s["SearchForm-button"]}>
              <span className={s["SearchForm-button-label"]}>Search</span>
            </button>

            <input
              className={s["SearchForm-input"]}
              name="query"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
              value={query}
              onChange={handleChange}
            />
          </form>
        </header>
      </>
   );
};
