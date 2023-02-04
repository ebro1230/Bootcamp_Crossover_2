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
    "https://my.api.mockaroo.com/bootcamp_crossover_2.json?key=538900a0";
  const [restaurantType, setRestaurantType] = useState("");
  const [typesofFood, setTypesofFood] = useState([]);
  let { restaurants, isLoading, error, types } = useFetch(url);

  const handleOnClick = (e) => {
    navigation(`/${e.target.id}`);
  };
  const handleChange = (e) => {
    setRestaurantType(e.target.value);
  };
  const handleTypes = (restaurants) => {
    restaurants.forEach((restaurant) => {
      if (!types.includes(restaurant.tags1)) {
        types = [...types, restaurant.tags1];
      }
    });
  };
  useEffect(() => {
    handleTypes(restaurants);
    setTypesofFood(types);
  }, [restaurants]);

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
            <MenuItem value="">Any</MenuItem>
            {typesofFood.length
              ? typesofFood.map((type) => {
                  return <MenuItem value={type}>{type}</MenuItem>;
                })
              : null}
          </Select>
        </FormControl>
      </div>
      <div className="restaurants">
        {isLoading ? (
          <LoadingIndicator />
        ) : restaurants.length ? (
          restaurantType ? (
            restaurants.map((restaurant) => {
              if (restaurant.tags1 === restaurantType) {
                return (
                  <div className="restaurantCard">
                    <Card
                      width="300"
                      height="300"
                      key={restaurant.name}
                      id={restaurant.name}
                    >
                      <CardActionArea
                        id={restaurant.name}
                        onClick={handleOnClick}
                      >
                        <CardMedia
                          component="img"
                          className="card"
                          image={restaurant.logo}
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
                            {restaurant.tags1} <br />
                            restaurant.price
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              }
            })
          ) : (
            restaurants.map((restaurant) => {
              return (
                <div className="restaurantCard">
                  <Card
                    width="300"
                    height="300"
                    key={restaurant.name}
                    id={restaurant.name}
                  >
                    <CardActionArea
                      id={restaurant.name}
                      onClick={handleOnClick}
                    >
                      <CardMedia
                        component="img"
                        className="card"
                        image={restaurant.logo}
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
                          {restaurant.tags1} <br />
                          restaurant.price
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
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
