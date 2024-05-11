import logo from '/images/logo.svg'
import { HotelInfo } from '../components/HotelInfo';
import hotels from '../data.js';

export function Browse() {

  return (
    <>
    <nav class="fixed-navigation">
    <img class="logo" src={logo}/>
    <ul class="nav-links">
      <li><a class="nav-link" href="#">Home</a></li>
      <li><a class="nav-link" href="#"><b>Find offers</b></a></li>
      <li><a class="nav-link" href="#">Add new offers</a></li>
      <li><a class="nav-link" href="#">My offers</a></li>
      <li><a class="nav-link" href="#">Favorites</a></li>
      <button class="button primary">Log out</button>
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
        
        {hotels.map((hotel) => (
        <HotelInfo
        key = {hotel.key}
        location = {hotel.location}
        name = {hotel.name}
        description = {hotel.description}
        stars = {hotel.stars}
        price = {hotel.price}
        imgPath = {hotel.imgPath}
        />
      ))}
      </section>
    </section>
    
    </>
  )
}

export default Browse
