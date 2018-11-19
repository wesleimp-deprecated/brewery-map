import React from 'react';
import { Popup } from 'react-map-gl'
import { Container, Name } from './styles';

const BreweryInfo = ({ brewery, onClose }) => (
    <Popup latitude={parseFloat(brewery.latitude)} longitude={parseFloat(brewery.longitude)} onClose={onClose}>
        <Container>
            <div>
                <Name>{brewery.name} <span>({brewery.brewery_type})</span></Name>
                <span>{brewery.street}</span>
                <span>{brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}</span>
                <a href={brewery.website_url} target="_blank">Go to website</a>
            </div>
        </Container>
    </Popup>
);

export default BreweryInfo