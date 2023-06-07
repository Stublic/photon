import React, { useState } from "react";
import ImageBox from "./ImageBox";

const Search = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pexels, setPexels] = useState([]);
  const auth = "7eha0F7woI2qUqdgYbgFTaCKtM5UDUVzXTz2UCQzENDjoareCEFqDiA4";

  const searchPhotos = async (query, page) => {
    const dataFetch = await fetch(
      `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=${page}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      }
    );
    const data = await dataFetch.json();
    setPexels(data.photos);
    console.log(pexels);
  };

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div>
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            searchPhotos(query, page);
          }}
        >
          <input
            type="text"
            className="m-4"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
          <button className="m-2" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-row flex-wrap w-[80vw]">
        {pexels.map((pexel, index) => (
          <ImageBox pexel={pexel} key={index} />
        ))}
      </div>
      <div
      className="mt-10">
        <button className="m-4"
        onClick={() => {setPage(page-1); searchPhotos(query, page)}}
        >Prev</button>
        {
          buttons.map((button, index) => (
              <button
        className={page===button ? 'active' : ' '}
        key={index}
        >{button}</button>
          ))
        }
      
        <button 
        className="m-4"
        onClick={() => {setPage(page+1); searchPhotos(query, page)}}
        >Next</button>
      </div>
    </>
  );
};

export default Search;
