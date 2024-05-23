import React from 'react';
import '../style/PlantItem.css'
import CareScale from './CareScale';

function PlantItem({cover, name, price,water,light}){
    return(
        <li className='jh-plant-item'>
            <span className='jh-plant-item-price'>{price}€</span>
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`}/> 
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
        
    )
}

export default PlantItem;
