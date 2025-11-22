"use client";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import L from "leaflet";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete (L.Icon.Default.prototype as any)._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x.src,
//   iconUrl: markerIcon.src,
//   shadowUrl: markerShadow.src,
// });

import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

import { Tcenter } from "@/app/page";
import { useState, useEffect } from "react";

const DefaultIcon = L.icon({
  iconRetinaUrl: iconRetinaUrl as any,
  iconUrl: iconUrl as any,
  shadowUrl: shadowUrl as any,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function AutoFollow({ position }: { position: Tcenter }) {
  const map = useMap();

  useEffect(() => {
    if (!position) return;
    map.setView(position); // Auto center
  }, [position]);

  return null;
}

// export default function Map({ center }: { center: Tcenter }) {
// export default function Map({ center }: { center: LatLng }) {
export default function Map() {
  // const map = useMap();

  const [latlng, setLatLng] = useState({
    lat: 0,
    lng: 0,
  });

  const [targetLatLng, setTargetLatLng] = useState({
    lat: 14.0835,
    lng: 121.1474,
  });

  function showPosition(position: any) {
    setLatLng({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  useEffect(() => {
    const logInterval = setInterval(() => {
      navigator.geolocation.watchPosition(showPosition);
      // }, 1500);
    }, 10);

    return () => {
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    console.log(`Updated GPS: Lat: ${latlng.lat}, Lng: ${latlng.lng}`);
  }, [latlng]);

  return (
    <div>
      <MapContainer
        // center={[center.lat, center.lng]}
        center={[latlng.lat, latlng.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[center.lat, center.lng]}> */}

        <Marker position={[latlng.lat, latlng.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {latlng && <AutoFollow position={latlng} />}
      </MapContainer>
      <div className="p-4">
        <p>Geo Lat: {latlng.lat}</p>
        <p>Geo Lng: {latlng.lng}</p>
      </div>
    </div>
  );
}
