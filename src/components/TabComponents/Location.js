import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useFetch from "../useFetch";
export default function Location() {
  const { restaurants } = useFetch();
  const location = "location of our restaurant";
  return (
    <MapContainer center={location} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>This is your location</Popup>
      </Marker>
    </MapContainer>
  );
}
