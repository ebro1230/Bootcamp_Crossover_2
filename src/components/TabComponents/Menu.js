export default function Menu({ restaurant }) {
  return (
    <div className="restaurant-menu">
      <img
        src={restaurant.logo}
        onClick={() => window.open(restaurant.menu, "_blank")}
        target="_blank"
      ></img>
      <h6>Click on the image to see the menu</h6>
    </div>
  );
}
