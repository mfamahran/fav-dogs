'use client';
import { useState, useEffect } from 'react';
import DogImage from '../../components/DogImage';

const Favorites = () => {
  const [favoriteDogs, setFavoriteDogs] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteDogs');
    if (storedFavorites) {
      setFavoriteDogs(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteDogs', JSON.stringify(favoriteDogs));
  }, [favoriteDogs]);

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteDogs.map((url, index) => (
          <div key={url}>
            <DogImage
              url={url}
              favoriteDogs={favoriteDogs}
              setFavoriteDogs={setFavoriteDogs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
