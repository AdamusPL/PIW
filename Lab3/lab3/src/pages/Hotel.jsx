import { HotelInfo } from '../components/HotelInfo';
import { Helmet } from 'react-helmet';
import hotels from '../dataIndex.js';

export function Browse() {

  return (
    <>
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
        />
      ))}
      </section>
    </section>
    
    </>
  )
}

export default Browse
