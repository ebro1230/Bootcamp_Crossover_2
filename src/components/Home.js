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
import useFetch from "./useFetch";

function Home() {
  const navigation = useNavigate();
  const url =
    "https://app-7a20b2f8-6eda-430c-9229-4662dc2a238b.cleverapps.io/restaurant";
  const [restaurantType, setRestaurantType] = useState("");
  const { restaurants, isLoading, error } = useFetch(url);

  const handleOnClick = (e) => {
    navigation(`/${e.target.id}`);
    console.log("I was clicked");
    console.log(e);
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
        <div className="centered">
          <h1>Best Restaurants in Cologne</h1>
        </div>
      </div>
      <div className="filter">
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
            <MenuItem value="Greek">Greek</MenuItem>
            <MenuItem value="Turkish">Turkish</MenuItem>
            <MenuItem value="German">German</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="restaurants">
        {isLoading ? (
          <LoadingIndicator />
        ) : restaurants.length ? (
          restaurantType ? (
            restaurants.map((restaurant) => {
              if (restaurant.tags.include(restaurantType)) {
                return (
                  <Card
                    sx={{ maxWidth: 345 }}
                    key={restaurant.name}
                    id={restaurant.name}
                  >
                    <CardActionArea
                      id={restaurant.name}
                      onClick={handleOnClick}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={restaurant.restaurant_logo}
                        alt="Image of the Restaurant"
                        id={restaurant.name}
                      />
                      <CardContent id={restaurant.name}>
                        <Typography
                          id={restaurant.name}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {restaurant.name}
                        </Typography>
                        <Typography
                          id={restaurant.name}
                          variant="body2"
                          color="text.secondary"
                        >
                          restaurant.tags restaurant.price
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              }
            })
          ) : (
            restaurants.map((restaurant) => {
              return (
                <Card
                  sx={{ maxWidth: 345 }}
                  key={restaurant.name}
                  id={restaurant.name}
                >
                  <CardActionArea id={restaurant.name} onClick={handleOnClick}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={restaurant.restaurant_logo}
                      alt="Image of the Restaurant"
                      id={restaurant.name}
                    />
                    <CardContent id={restaurant.name}>
                      <Typography
                        id={restaurant.name}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {restaurant.name}
                      </Typography>
                      <Typography
                        id={restaurant.name}
                        variant="body2"
                        color="text.secondary"
                      >
                        restaurant.tags restaurant.price
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          )
        ) : (
          <h1>An Error Has Occurred: {error}</h1>
        )}
      </div>
    </>
  );
}

export default Home;

/*Goes between the Select
{restaurants.length
            ? restaurants.map((restaurant) => {
                restaurant.map((tag) => {
                  <MenuItem value={tag}>{tag}</MenuItem>;
                });
              })
            : null}
*/
