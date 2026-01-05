import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items = [] }) {
  return (
    <MapContainer
      //   center={[39.8283, -98.5795]} // geographic center of USA
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [40.7128, -74.006]
      } // New York City
      //   center={[36.7783, -119.4179]} // California center

      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
