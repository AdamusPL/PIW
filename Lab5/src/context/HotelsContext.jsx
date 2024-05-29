import React, { createContext, useContext, useState, useEffect } from 'react';
import { firestore } from '../config';
import { getDocs, collection } from 'firebase/firestore';

const HotelsContext = createContext();

export const useHotels = () => {
  return useContext(HotelsContext);
};

export const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "hotels"));
        const hotels = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        const sortedHotels = [...hotels].sort((a, b) => a.id - b.id);
        setHotels(sortedHotels);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <HotelsContext.Provider value={{hotels, setHotels}}>
      {children}
    </HotelsContext.Provider>
  );
};
