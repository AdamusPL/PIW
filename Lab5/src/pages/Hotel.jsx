import { useLocation } from 'react-router-dom';
import '../css/hotel.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useContext, useState, useRef } from 'react';
import heart from '/images/heart.png'
import filledHeart from '/images/heart_filled.png'
import { FavoritesContext } from '../context/FavoritesContext';

function showModal(){
    const modal = document.getElementById("modal");
    modal.showModal();
}

function closeModal(){
    const modal = document.getElementById("modal");
    modal.close();
}

export function Hotel() {
    const location = useLocation();
    const [isFavorite, setIsFavorite] = useState(location.state.isFavorite);
    const messageRef = useRef('');
    const [infoMessage, setInfoMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        setInfoMessage("Email sent successfully");
        messageRef.current.value = '';
    }

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
    try{
      await logOut();
    } catch (error){
      console.error(error);
    }}

    const heroImageStyle = {
        backgroundImage: `url(${location.state.imgHotelPath})`
    }

    const { removeOrAddToFavorites } = useContext(FavoritesContext);

    const handleFavoriteToggle = () => {
        setIsFavorite((prevIsFavorite) => {
            const newIsFavorite = !prevIsFavorite;
            removeOrAddToFavorites(location.state.id);
            return newIsFavorite;
        });
    }

    return (
    <>
    <nav class="fixed-navigation">
        <img class="logo" src="/images/logo.svg"/>
        <ul class="nav-links">
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/browse' className='nav-link'>Find offers</Link></li>
            <li><Link to='/browse' className='nav-link'>Add new offers</Link></li>
            <li><Link to='/' className='nav-link'>My offers</Link></li>
            <li><Link to='/' className='nav-link'>Favorites</Link></li>
            {user ? (<button class="button primary" onClick={handleSignOut}>Log out</button>) : (<Link to='/login' className='nav-link'><button class="button primary">Log in</button></Link>) }
        </ul>
        <button class="button primary hidden">Menu</button>
    </nav>
    <section id="hero" class="grid hero-section">
        <article class="hero-details-mod-1">
            <p class="title-large">{location.state.name}</p>
        </article>
        <div class="hero-image-container-mod" style={heroImageStyle}>
            <p class="chip">Add to favorites
                <img src={isFavorite ? filledHeart : heart} class="heart" onClick={handleFavoriteToggle} />
            </p>
        </div>
        <article class="hero-details-mod-2">
            <p><b>Location:</b> {location.state.location}</p>
            <p><b>Local category:</b> {location.state.stars}</p>
            <p><b>Price:</b> {location.state.price}/night</p>
            <p><b>Description:</b></p>
            <p class="text-middle">{location.state.description}</p>
            {user ? (<a><button class="chip-view-offer" onClick={showModal}>Contact
                    <img id="mail" src="/images/mail.png" />
                    </button>
                </a>) : (<p>You must be logged in to contact the owner</p>)}
                <div class="hero-cards">
                    <div class="card-image-mod" style={heroImageStyle}></div>
                    <div class="card-image-mod" style={heroImageStyle}></div>
                </div>
        </article>
    </section>
    <div id="middle">
    <dialog id="modal">
        <div id="close-modal">
            <button class="close-button" onClick={closeModal}>X</button>
        </div>
        <p class="title-large">Contact</p>
        <p>You're contacting the {location.state.name} hotel:</p>
        <br></br>
        <textarea id="context-of-message" ref={messageRef}></textarea>
        <div id="button-row">
        <button class="nav-link px-2" onClick={closeModal}>Cancel</button>
        <button class="chip-view-offer" onClick={sendEmail}>Send<img id="mail" src="/images/mail.png" /></button>
        </div>
        <p id="info-email-sent">{infoMessage}</p>
    </dialog>
    </div>
    </>
  )
}

export default Hotel;
