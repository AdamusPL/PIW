import logo from '/images/logo.svg'
import arrow from '/images/Arrow.svg'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import heart from '/images/heart.png'
import filledHeart from '/images/heart_filled.png'
import { FavoritesContext } from '../context/FavoritesContext';
import { useHotels } from '../context/HotelsContext';

export function Browse() {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try{
      await logOut();
    } catch (error){
      console.error(error);
    }
  }

  const { hotels } = useHotels();

  const navigate = useNavigate();

  const toHotel = (props) => {
    navigate('/hotel',{state: props});
  }

  const { removeOrAddToFavorites } = useContext(FavoritesContext);

  return (
    <>
    <nav class="fixed-navigation">
    <img class="logo" src={logo}/>
    <ul class="nav-links">
      <li><Link to='/' className='nav-link'>Home</Link></li>
      <li><Link to='/browse' className='nav-link'>Find offers</Link></li>
      <li><Link to='/browse' className='nav-link'>Add new offers</Link></li>
      <li><Link to='/' className='nav-link'>My offers</Link></li>
      <li><Link to='/favorites' className='nav-link'>Favorites</Link></li>
      {user ? (<button class="button primary" onClick={handleSignOut}>Log out</button>) : (<Link to='/login' className='nav-link'><button class="button primary">Log in</button></Link>) }
    </ul>
    <button class="button primary hidden">Menu</button>
    </nav>
    <section id="hero" class="grid hero-section-mod">
        <article class="hero-details-mod">
            <p class="title-large">Welcome, your tranquillity oasis awaits</p>
        </article>
    </section>
    <section id="browse" class="browse-section">
        <p class="title-middle">Explore the hotels</p>
        <input class="searchbar" placeholder="Search by hotel name, place, description etc"></input>
        <section class="grid hotel-cards">

        {hotels ? (
            hotels.map((props, i) => (
        <article class="hotel-card">
                <div class="card-image">
                    <p class="chip">{props.location}</p>
                    <p class="chip"><img src={props.isFavorite ? filledHeart : heart} class="heart" onClick={() => removeOrAddToFavorites(props.id)} /></p>
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
  )
}

export default Browse
