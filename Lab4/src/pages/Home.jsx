import { HotelInfoHome } from '../components/HotelInfoHome.jsx';
import { Link } from 'react-router-dom';
import arrow from '/images/Arrow.svg';
import logo from '/images/logo.svg'
import hotelsIndex from '../dataIndex.js';
import { UserAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth';

export function Home() {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try{
      await logOut();
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error){
      console.log(error);
    }
  }

  return (
    <>
    <nav class="fixed-navigation">
    <img class="logo" src={logo}/>
    <ul class="nav-links">
      <li><Link to='/' className='nav-link'>Home</Link></li>
      <li><Link to='browse' className='nav-link'>Browse</Link></li>
      <li><Link to='browse' className='nav-link'>Rent with us</Link></li>
      {user === null && (<Link to='sign-up' className='nav-link'>Sign up</Link>)}
      {user ? (<button class="button primary" onClick={handleSignOut}>Log out</button>) : (<Link to='login' className='nav-link'><button class="button primary">Log in</button></Link>) }
    </ul>
    <button class="button primary hidden">Menu</button>
    </nav>

    <section id="hero" class="grid hero-section">
    <article class="hero-details">
            <p class="title-large">Your tranquillity oasis awaits</p>
            <p class="text-middle">TranquilTravels is designed to help you find a serene retreat for your next holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than ever. </p>
            <div class="hero-cards">
                <div class="card-image">
                    <p class="chip">New hotels <img src={arrow}/></p>
                </div>
                <div class="card-image">
                    <p class="chip">Best reviews <img src={arrow}/></p>
                </div>
            </div>
        </article>
        <div class="hero-image-container"></div>
    </section>

    <section id="browse" class="browse-section">
        <p class="title-middle">Explore the hotels</p>
        <input class="searchbar" placeholder="Search by hotel name, place etc." />
        <section class="grid hotel-cards">

      {hotelsIndex.map((hotel) => (
        <HotelInfoHome
        key = {hotel.key}
        location = {hotel.location}
        name = {hotel.name}
        description = {hotel.description}
        stars = {hotel.stars}
        price = {hotel.price}
        />
      ))}

    </section>
    <button class="button secondary">Find more <img src={arrow} /></button>
    </section>
    <section id="rent" class="footer grid">
        <div class="card-image"></div>
        <article class="footer-details">
            <p class="title-large">Rent with us!</p>
            <p class="text-middle">If you’re a hotel or an apartament owner who’s looking to reach more customers you can now rent your property with TranquilTravels. </p>
            <button class="button secondary">Learn more <img src={arrow} /></button>
        </article>
    </section>
    </>
  )
}

export default Home
