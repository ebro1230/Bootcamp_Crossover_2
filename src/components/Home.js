import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LoadingIndicator from "./LoadingIndicator";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Home() {
  const navigation = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurantType, setRestaurantType] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("")
      .then((response) => {
        if (!response.ok) {
          setError(`HTTP Status Error: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setRestaurants(json);
      })
      .catch((error) => {
        setError(`${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOnClick = (e) => {
    navigation(`/${e.restaurantName}`);
  };
  const handleChange = (e) => {
    setRestaurantType(e.target.value);
  };

  return (
    <>
      <div className="container">
        <img
          src="https://www.expatica.com/app/uploads/sites/6/2014/05/cologne.jpg"
          alt="Picture of Cologne"
          width="100%"
          height="200"
        />
        <div class="centered">
          <h1>Best Restaurants in Cologne</h1>
        </div>
      </div>
      <FormControl sx={{ m: 1, minWidth: 800 }}>
        <InputLabel id="Type of Restaurant">Restaurant Type</InputLabel>
        <Select
          labelId="Type of Restaurant"
          id="Restaurant Type"
          value={restaurantType}
          autoWidth
          label="Restaurant Type"
          onChange={handleChange}
        >
          {restaurants.length
            ? restaurants.map((restaurant) => {
                restaurant.map((tag) => {
                  <MenuItem value={tag}>{tag}</MenuItem>;
                });
              })
            : null}
        </Select>
      </FormControl>
      {isLoading ? (
        <LoadingIndicator />
      ) : restaurants.length ? (
        restaurantType === true ? (
          restaurants.map((restaurant) => {
            if (restaurant.tags.include(restaurantType)) {
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleOnClick}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={restaurant.image}
                    alt="Image of the Restaurant"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {restaurant.tags}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>;
            }
          })
        ) : (
          restaurants.map((restaurant) => {
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleOnClick}>
                <CardMedia
                  component="img"
                  height="140"
                  image={restaurant.image}
                  alt="Image of the Restaurant"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.tags}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>;
          })
        )
      ) : (
        <h1>An Error Has Occurred: {error}</h1>
      )}
    </>
  );
}

export default Home;
