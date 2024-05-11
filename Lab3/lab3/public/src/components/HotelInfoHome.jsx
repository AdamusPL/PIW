export const HotelInfoHome = (props) => (
    <>
        <article class="hotel-card">
                <div class="card-image">
                    <p class="chip">{props.location}</p>
                </div>
                <p class="text-middle">{props.name}</p>
                <p class="text-small">{props.description}</p>
                <div class="hotel-card-footer">
                    <p class="text-middle">{props.stars}</p>
                    <p class="text-middle">{props.price}</p>
                </div>
        </article>
    </>
)