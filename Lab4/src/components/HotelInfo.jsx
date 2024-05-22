import arrow from '/images/Arrow.svg'
import { Link } from 'react-router-dom';

export const HotelInfo = (props) => (
    <>
    <article class="hotel-card">
                <div class="card-image">
                    <p class="chip">{props.location}</p>
                    <p class="chip"><img class="heart" src={props.imgPath} /></p>
                </div>
                <p class="text-middle">{props.name}</p>
                <p class="text-small">{props.description}</p>
                    <div class="hotel-card-footer">
                    <p class="text-middle">{props.stars}</p>
                    <p class="text-middle">{props.price}</p>
                </div>
                <div>
                    <Link to='/hotel'><button class="chip-view-offer">View offer
                    <img src={arrow} />
                    </button></Link>
                </div>
    </article>
    </>
)