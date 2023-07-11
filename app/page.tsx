'use client';
import { useState, useEffect } from 'react';
import DogImage from '../components/DogImage';

const Home = () => {
    const [dogs, setDogs] = useState<string[]>([]);
    const [favoriteDogs, setFavoriteDogs] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem('favoriteDogs');
      if (storedFavorites) {
        setFavoriteDogs(JSON.parse(storedFavorites));
      }
      fetchDogs();
    }, []);
  
    useEffect(() => {
      localStorage.setItem('favoriteDogs', JSON.stringify(favoriteDogs));
    }, [favoriteDogs]);

    const fetchDogs = async () => {
        setIsLoading(true);
        const newDogs: string[] = [];
        while (newDogs.length < 6) {
          const response = await fetch('https://random.dog/woof.json');
          const data = await response.json();
          if (data.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            newDogs.push(data.url);
          }
        }
        setDogs(newDogs);
        setIsLoading(false);
      };

      return (
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dogs.map((url, index) => (
              <div key={index}>
                <DogImage
                  url={url}
                  favoriteDogs={favoriteDogs}
                  setFavoriteDogs={setFavoriteDogs}
                />
              </div>
            ))}
          </div>
          <button className="mt-4 px-4 py-2 rounded bg-blue-500 text-white" onClick={fetchDogs} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      );
};


export default Home;
