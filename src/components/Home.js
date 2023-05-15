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
import moneySignGold from "./Dollar_Sign_(Gold).jpg";
import moneySignBlack from "./Dollar_Sign_(Black).jpg";

function Home() {
  const navigation = useNavigate();
  const url = `${process.env.REACT_APP_BACKEND_URL}`;
  const [restaurantType, setRestaurantType] = useState("");
  const [typesofFood, setTypesofFood] = useState([]);
  let { restaurants, isLoading, error, types } = useFetch(url);
  console.log(restaurants);
  const handleOnClick = (e) => {
    navigation(`/${e.target.id}`);
  };
  const handleChange = (e) => {
    setRestaurantType(e.target.value);
  };
  const handleTypes = (restaurants) => {
    restaurants.forEach((restaurant) => {
      restaurant.tags.map((tag) => {
        if (!types.includes(tag)) {
          types = [...types, tag];
        }
      });
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
          src="https://www.panorama-photo.net/photo/765.jpg"
          alt="Picture of Cologne"
          className="banner-img"
        />
        <div className="centered">
          <h1>Best Restaurants in Cologne</h1>
        </div>
      </div>
      <div className="filter-center">
        <div className="filter">
          <FormControl sx={{ m: 1, width: 100 + "%" }}>
            <InputLabel id="Type of Restaurant">Restaurant Type</InputLabel>
            <Select
              labelId="Type of Restaurant"
              id="Restaurant Type"
              value={restaurantType}
              label="Restaurant Type"
              onChange={handleChange}
              className="restaurant-type"
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
      </div>
      <div className="restaurants">
        {isLoading ? (
          <LoadingIndicator />
        ) : restaurants.length ? (
          restaurantType ? (
            restaurants.map((restaurant) => {
              if (restaurant.tags.includes(restaurantType)) {
                return (
                  <div className="restaurantCard">
                    <Card
                      width="300"
                      height="300"
                      key={restaurant.name}
                      id={restaurant.name}
                      onClick={handleOnClick}
                    >
                      <CardActionArea
                        id={restaurant.name}
                        onClick={handleOnClick}
                        sx={{ height: 100 + "%" }}
                      >
                        <CardMedia
                          component="img"
                          className="card"
                          image={restaurant.logo}
                          alt="Image of the Restaurant"
                          id={restaurant.name}
                          onClick={handleOnClick}
                        />
                        <CardContent
                          id={restaurant.name}
                          onClick={handleOnClick}
                        >
                          <Typography
                            id={restaurant.name}
                            gutterBottom
                            variant="h5"
                            component="div"
                            onClick={handleOnClick}
                          >
                            {restaurant.name}
                          </Typography>
                          <Typography
                            id={restaurant.name}
                            variant="body2"
                            color="text.secondary"
                            onClick={handleOnClick}
                          >
                            {restaurant.tags.map((tag) => (
                              <p id={restaurant.name}>{tag} </p>
                            ))}
                            <br />
                            {restaurant.price === "1" ? (
                              <div onClick={handleOnClick}>
                                <img
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                  id={restaurant.name}
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                  id={restaurant.name}
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                  id={restaurant.name}
                                />
                                <img
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                  id={restaurant.name}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                              </div>
                            ) : restaurant.price === "2" ? (
                              <div onClick={handleOnClick}>
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                              </div>
                            ) : restaurant.price === "3" ? (
                              <div onClick={handleOnClick}>
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                              </div>
                            ) : restaurant.price === "4" ? (
                              <div onClick={handleOnClick}>
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignBlack}
                                  alt="Black Money Sign"
                                  onClick={handleOnClick}
                                />
                              </div>
                            ) : restaurant.price === "5" ? (
                              <div onClick={handleOnClick}>
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                                <img
                                  id={restaurant.name}
                                  src={moneySignGold}
                                  alt="Gold Money Sign"
                                  onClick={handleOnClick}
                                />
                              </div>
                            ) : null}
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
                    onClick={handleOnClick}
                  >
                    <CardActionArea
                      id={restaurant.name}
                      onClick={handleOnClick}
                      sx={{ height: 100 + "%" }}
                    >
                      <CardMedia
                        component="img"
                        className="card"
                        image={restaurant.logo}
                        alt="Image of the Restaurant"
                        id={restaurant.name}
                        onClick={handleOnClick}
                      />
                      <CardContent id={restaurant.name} onClick={handleOnClick}>
                        <Typography
                          id={restaurant.name}
                          gutterBottom
                          variant="h5"
                          component="div"
                          onClick={handleOnClick}
                        >
                          {restaurant.name}
                        </Typography>
                        <Typography
                          id={restaurant.name}
                          variant="body2"
                          color="text.secondary"
                          onClick={handleOnClick}
                        >
                          {restaurant.tags.map((tag) => (
                            <p id={restaurant.name}>{tag} </p>
                          ))}
                          <br />
                          {restaurant.price === "1" ? (
                            <div onClick={handleOnClick}>
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                            </div>
                          ) : restaurant.price === "2" ? (
                            <div onClick={handleOnClick}>
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                            </div>
                          ) : restaurant.price === "3" ? (
                            <div onClick={handleOnClick}>
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                            </div>
                          ) : restaurant.price === "4" ? (
                            <div onClick={handleOnClick}>
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignBlack}
                                alt="Black Money Sign"
                                onClick={handleOnClick}
                              />
                            </div>
                          ) : restaurant.price === "5" ? (
                            <div onClick={handleOnClick}>
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                              <img
                                id={restaurant.name}
                                src={moneySignGold}
                                alt="Gold Money Sign"
                                onClick={handleOnClick}
                              />
                            </div>
                          ) : null}
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
