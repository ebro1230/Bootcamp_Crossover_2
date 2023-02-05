import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};

const ResizeMap = ({ height }) => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [height]);
};

export default function Location(props) {
  return (
    <>
      {props.position ? (
        <div style={{ height: props.height }}>
          <MapContainer
            center={props.position}
            zoom={16}
            scrollWheelZoom={false}
            className="mapContainer"
          >
            <RecenterAutomatically
              lat={props.position[0]}
              lng={props.position[1]}
            />
            <ResizeMap height={props.height} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={props.position}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
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
