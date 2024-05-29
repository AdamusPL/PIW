import React, { createContext, useState, useEffect } from 'react';
import { useHotels } from './HotelsContext';

export const FavoritesContext = createContext(null);

const getDefaultFavorites = (hotels) => {
    let favorites = {};
    hotels.forEach(hotel => {
        favorites[hotel.id] = 0;
    });
    return favorites;
}

export const FavoritesContextProvider = (props) => {
    const { hotels, setHotels } = useHotels();

    const removeOrAddToFavorites = (itemId) => {
        if(localStorage.getItem(itemId) === null){
            localStorage.setItem(itemId, JSON.stringify(hotels[itemId-1]));
        }
        else{
            localStorage.removeItem(itemId);
        }
        setHotels((prevHotels) =>
            prevHotels.map((hotel) =>
              hotel.id === itemId ? { ...hotel, isFavorite: !hotel.isFavorite } : hotel
            )
        );
    };

    const contextValue = {removeOrAddToFavorites}

    return <FavoritesContext.Provider value={contextValue}>{props.children}</FavoritesContext.Provider>;
};