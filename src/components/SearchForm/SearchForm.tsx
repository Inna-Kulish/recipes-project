import React, { memo, useState } from "react";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";

interface SearchFormProps {
    q: string;
    onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = memo(({ q, onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: { target: { value: string; }; }) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }
      
      if (query === q) {
          return;
      }

      onSubmit(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search recipe"
        value={query}
        onChange={handleChange}
      />
      <Button name={"Search"} />
    </form>
  );
});

export default SearchForm;
