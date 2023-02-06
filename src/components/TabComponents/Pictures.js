import { useState, useEffect } from "react";
export default function Pictures({ restaurant }) {
  const [pics, setPics] = useState(restaurant.pics);
  console.log(pics);
  useEffect(() => {
    setPics(restaurant.pics);
  }, [restaurant]);
  return (
    <div className="img-tab-container">
      {pics.map((pic) => {
        return <img key={pic} src={pic} alt="Restaurant pics"></img>;
      })}
    </div>
  );
}
