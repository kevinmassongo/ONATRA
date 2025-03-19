import React from 'react';  
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';  
import 'leaflet/dist/leaflet.css';  
import L from 'leaflet';  

// Définir les marqueurs et les itinéraires  
const locations = [  
  { position: [4.4553, 15.2624], name: 'Binza UPN' },  
  { position: [4.4493, 15.2681], name: 'Binza Pigeon' },  
  // Ajoutez d'autres stations ici...  
];  

// Exemple d'itinéraire  
const route = [  
  [4.4553, 15.2624],  
  [4.4493, 15.2681],  
  // Ajoutez d'autres points d’itinéraire...  
];  

const TrainTracking = () => {  
  return (  
    <MapContainer center={[4.4553, 15.2624]} zoom={13} style={{ height: '100vh', width: '100%' }}>  
      <TileLayer  
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
        attribution='&copy; OpenStreetMap contributors'  
      />  
      <Polyline positions={route} color="orange" /> {/* Changez la couleur ici */}  
      {locations.map((loc, index) => (  
        <Marker key={index} position={loc.position}>  
          <Popup>{loc.name}</Popup>  
        </Marker>  
      ))}  
    </MapContainer>  
  );  
};  

export default TrainTracking;  