import { useState, useEffect } from "react";
import Button from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/Searchbar/Searchbar";
import { newSearch } from "./utils/newSearch";
import { Hearts } from "react-loader-spinner";
import s from "./Components/Hearts/Hearts.module.css";
import st from "./Components/Error/error.module.css";
import SimpleReactLightbox from "simple-react-lightbox";

export default function App() {
  const [query, setQuery] = useState("");
  const [newFetchs, setNewFetchs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") return;
    setNewFetch();
  }),
    [query, page];

  const setNewFetch = () => {
    setIsLoading({ isLoading: true });
    setError({ error: null });
    newSearch(query, page)
      .then((newFetchs) => setNewFetchs((prev) => [...prev, ...newFetchs]))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading({ isLoading: false }));
  };

  const handleSearchSubmmit = (query) => {
    setQuery(query);
    setPage({ page: 1 });
    setNewFetchs([]);
  };
  const handlerLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  // console.log(this.state.newFetch);
  return (
    <SimpleReactLightbox>
      <SearchBar onSubmit={handleSearchSubmmit} />
      {error ? (
        <p className={st["error"]}>{error}</p>
      ) : (
        <>
          <ImageGallery newFetchs={newFetchs} />
          {isLoading ? (
            <div className={s["hearts"]}>
              <Hearts
                heigth="100"
                width="100"
                color="blue"
                ariaLabel="loading"
              />
            </div>
          ) : (
            newFetchs.length > 0 &&
            query &&
            newFetchs.length % 12 === 0 && (
              <Button handleLoadMore={handlerLoadMore} />
            )
          )}
        </>
      )}
    </SimpleReactLightbox>
  );
}
