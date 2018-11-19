import React from 'react';
import { Popup } from 'react-map-gl'

const BreweryInfo = ({ brewery, onClose }) => (
    <Popup latitude={parseFloat(brewery.latitude)} longitude={parseFloat(brewery.longitude)} onClose={onClose}>
        <p>{brewery.name}</p>
        <p>{brewery.state}</p>
    </Popup>
);

export default BreweryInfo