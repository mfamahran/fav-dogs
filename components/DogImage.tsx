import { useState } from 'react';

interface DogImageProps {
  url: string;
  favoriteDogs: string[];
  setFavoriteDogs: (favoriteDogs: string[]) => void;
}

const DogImage: React.FC<DogImageProps> = ({ url, favoriteDogs, setFavoriteDogs }) => {
  const [isFavorite, setIsFavorite] = useState(favoriteDogs.includes(url));

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setFavoriteDogs([...favoriteDogs, url]);
    } else {
      setFavoriteDogs(favoriteDogs.filter(dogUrl => dogUrl !== url));
    }
  };

  return (
    <div className="border border-gray-200 rounded p-4">
      <img src={url} alt="A random dog" className="w-full h-64 object-cover" />
      <button className={`mt-2 px-4 py-2 rounded ${isFavorite ? 'bg-gray-400' : 'bg-blue-500'} text-white`} onClick={toggleFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default DogImage;
