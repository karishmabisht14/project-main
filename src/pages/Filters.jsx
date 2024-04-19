import React from "react";

const genres = ["Comedy", "EDM", "Punjabi", "Sufi", "Business", "Education"];
const languages = ["Hindi", "English", "Punjabi"];

export default function Filters({ searchObj, setSearchObj }) {
  return (
    <div>
      <div>
        {genres.map((genre, index) => (
          <button
            key={index}
            onClick={(e) => {
              let genre = e.target.textContent;
              console.log("g", genre);
              console.log("button object", genre);
              setSearchObj({ ...searchObj, genre });
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={(e) => {
              let language = e.target.textContent;
              console.log("button object", language);
              setSearchObj({ ...searchObj, language });

              //handleFilter(language);
            }}
          >
            {language}
          </button>
        ))}
      </div>
      {/* <select>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This weekend</option>
        </select> */}

      <div>
        <input type="text" placeholder="Select your movies"></input>
      </div>
    </div>
  );
}
