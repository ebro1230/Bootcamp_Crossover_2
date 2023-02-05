export default function Details({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <br />
      <img className="restaurant-img" src={restaurant.logo}></img>
      <h4>Restaurant address:</h4>
      <p>{restaurant.country}</p>
      <p>{restaurant.state}</p>
      <p></p>
      <p>
        {restaurant.zip} {""}
        {restaurant.city}
      </p>
      <p>{restaurant.street}</p>
      <p>
        <strong>Phone number:</strong> {restaurant.phone}
      </p>
      <p>
        <strong>Email:</strong> {restaurant.email}
      </p>
      <p>
        <strong>Working hours:</strong> from {restaurant.open}
        {""} to {restaurant.close}
      </p>
      <p>
        <strong>Delivery:</strong> NO
      </p>
    </div>
  );
}
