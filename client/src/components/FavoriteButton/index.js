import React, { useState, useEffect } from "react";

const data = [
  { id: 1, name: "Marco" }
];

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <div className="App">
      <ul>
        {favorites.map((item, i) => (
          <ul key={i}>
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.favorite === true ? "Remove" : "Add"}
            </button>
          </ul>
        ))}
      </ul>

      {/* <h1>Favorite list</h1>
      <ul>
        {favorites.map(item =>
          item.favorite === true ? <li key={item.id}>{item.name}</li> : null
        )}
      </ul> */}
    </div>
  );
}