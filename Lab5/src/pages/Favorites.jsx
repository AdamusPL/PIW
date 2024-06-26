import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import logo from '/images/logo.svg';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import heart from '/images/heart.png'
import filledHeart from '/images/heart_filled.png'
import arrow from '/images/Arrow.svg'
import "../css/favorites.css"

export function Favorites() {
  const { user, logOut } = UserAuth();
  const [favoriteHotels, setFavoriteHotels] = useState([]);

  useEffect(() => {
    if (favoriteHotels) {
      const root = document.documentElement;
      favoriteHotels.forEach((hotel, i) => {
        root.style.setProperty(`--image-path${i+1}`, `url(${hotel.imgHotelPath})`);
      });
    }
  }, [favoriteHotels]);

  useEffect(() => {
    const items = {...localStorage};
    const favorites = [];

    for(var i = 0; i < Object.keys(items).length; i++){
      if (!isNaN(parseInt(Object.keys(items)[i]))) {
        const hotel = Object.values(items)[i];
        favorites.push(JSON.parse(hotel));
      }
    }
    
    setFavoriteHotels(favorites);
    
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const { removeOrAddToFavorites } = useContext(FavoritesContext);

  const handleRemoveFromFavorites = (hotelId) => {
    removeOrAddToFavorites(hotelId);
    setFavoriteHotels((prevFavorites) =>
      prevFavorites.filter((hotel) => hotel.id !== hotelId)
    );
  }

  

  return (
    <>
      <nav class="fixed-navigation">
        <img class="logo" src={logo} />
        <ul class="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav-link">
              Find offers
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav-link">
              Add new offers
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              My offers
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          </li>
          {user ? (
            <button class="button primary" onClick={handleSignOut}>
              Log out
            </button>
          ) : (
            <Link to="/login" className="nav-link">
              <button class="button primary">Log in</button>
            </Link>
          )}
        </ul>
        <button class="button primary hidden">Menu</button>
      </nav>

      <section id="browse" class="browse-section">
      <p class="title-large">Your Saved Offers</p>
      

      <section class="grid hotel-cards">
      {favoriteHotels ? (
            favoriteHotels.map((props, i) => (
        <article class="hotel-card">
                <div class="card-image-mod">
                    <p class="chip">{props.location}</p>
                    <p class="chip"><img src={filledHeart} class="heart" onClick={() => handleRemoveFromFavorites(props.id)} /></p>
                </div>
                <p class="text-middle">{props.name}</p>
                <p class="text-small">{props.description}</p>
                    <div class="hotel-card-footer">
                    <p class="text-middle">{props.stars}</p>
                    <p class="text-middle">{props.price}</p>
                </div>
                <div>
                    <button class="chip-view-offer" onClick={()=>{toHotel(props)}}>View offer
                    <img src={arrow} />
                    </button>
                </div>
        </article>
        ))
      ) : (
        <p></p>
      )}

      </section>
      </section>
    </>
  );
}

export default Favorites;
