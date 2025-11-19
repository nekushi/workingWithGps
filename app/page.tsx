// "use client";

// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function Home() {
//   console.log(window);
//   const height = window.innerHeight;

//   return (
//     <div className={`h-[${height}]`}>
//       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function Home() {
//   const [height, setHeight] = useState(400); // default fallback height

//   useEffect(() => {
//     setHeight(window.innerHeight);
//   }, []);

//   return (
//     <div style={{ height }}>
//       <MapContainer
//         // style={{ height: "100%", width: "100%" }}
//         center={[51.505, -0.09]}
//         zoom={13}
//         scrollWheelZoom={false}
//       >
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>A pretty CSS3 popup.</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  // return <Map center={latlng} />;
  return <Map />;
}

export type Tcenter = {
  lat: number;
  lng: number;
};

// lat: 14.125451039620254,
// lng: 121.14177005696203,
