import { useLocation } from 'react-router-dom';
import '../hotel.css'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export function Hotel() {

    const location = useLocation();

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
    try{
      await logOut();
    } catch (error){
      console.log(error);
    }}

    const heroImageStyle = {
        backgroundImage: `url(${location.state.imgHotelPath})`
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
                <img id="heart" src="/images/heart.png" />
            </p>
        </div>
        <article class="hero-details-mod-2">
            <p><b>Location:</b> {location.state.location}</p>
            <p><b>Local category:</b> {location.state.stars}</p>
            <p><b>Price:</b> {location.state.price}/night</p>
            <p><b>Description:</b></p>
            <p class="text-middle">{location.state.description}</p>
                <a><p class="chip-view-offer">Contact
                    <img id="mail" src="/images/mail.png" />
                    </p>
                </a>
                <div class="hero-cards">
                    <div class="card-image-mod" style={heroImageStyle}></div>
                    <div class="card-image-mod" style={heroImageStyle}></div>
                </div>
        </article>
    </section>
    </>
  )
}

export default Hotel;
