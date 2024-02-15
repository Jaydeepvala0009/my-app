import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Redux/FavSlice';
import { IoIosHeart, MdFavoriteBorder } from '../Assets/Icons';

const FavoriteButton = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(state => state.favorites);

  const isFavorite = favoriteProducts.some(favProduct => favProduct.id === product.id);

  const toggleFavorite = () => {
    const productIndex = favoriteProducts.findIndex(favProduct => favProduct.id === product.id);
    if (isFavorite) {
      const updatedFavorites = [...favoriteProducts.slice(0, productIndex), ...favoriteProducts.slice(productIndex + 1)];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch(removeFromFavorites({ id: product.id }));
    } else {
      const updatedFavorites = [...favoriteProducts, product];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div onClick={toggleFavorite}>
      {isFavorite ? <IoIosHeart/> : <MdFavoriteBorder/>
}
    </div>
  );
};

export default FavoriteButton;
