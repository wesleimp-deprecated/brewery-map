import React from 'react';
import { Pin } from './styles'

const CustomPin = ({ onClick }) => (
    <Pin onClick={onClick}>
        <i className="fa fa-map-marker"></i>
    </Pin>
    
);

export default CustomPin;