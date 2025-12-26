import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

function Pin({ item }) {
  console.log(item.latitude, item.longitude);
  return (
    //latitude and longitude used to place the marker on the map 👈 👈
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="">
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-20 object-cover mb-2"
          />
          {/* text */}
          <div className="flex flex-col items-center gap-1">
            <Link to={`/${item.id}`} className="text-blue-500 font-bold">
              {item.title}
            </Link>
            <span>{item.bedrooms} bedroom</span>
            <strong>$ {item.price}</strong>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
