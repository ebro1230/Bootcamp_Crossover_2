import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Location(props) {
  return (
    <>
      {props.position ? (
        <div className="mapContainer">
          <MapContainer
            center={props.position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position}>
              <Popup>
                {props.restaurant.name} <br /> {props.restaurant.street} <br />{" "}
                {props.restaurant.zip}, {props.restaurant.city} <br />
                {props.restaurant.state}, {props.restaurant.country}`.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : null}
    </>
  );
}
