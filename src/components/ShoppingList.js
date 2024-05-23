import React, { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../style/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList({cart,updateCart}) {
  const [activeCategory, setActiveCategory] = useState('');

  function addToCart (name, price){
    const currentPlantAdded= cart.find (plant=>plant.namme ===name)
    if (currentPlantAdded){
      const cartFiltered=cart.filter(plant=>plant.name!==name)
      updateCart ([...cartFiltered,{name,price,amount:currentPlantAdded.amount+1}])}
    else {updateCart([...cart,{name,price,amount:1}])}
    
  }

  
  const someWaterLight=plantList.find(plant=>plant.water===plant.light)
  console.log(someWaterLight)
  const maxWater=plantList.filter(plant=>plant.water===3)
  console.log(maxWater)
  const minLight=plantList.filter(plant=>plant.light===1)
  console.log(minLight)
  const maxPrice = plantList.reduce((max, plant) => {
    return plant.price > max ? plant.price : max;
  }, 0);
  
  console.log('Prix maximal:', maxPrice);



  const categories = plantList.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

  return (
    <div className='jh-shoppingList'>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='jh-plant-list'>
        {plantList.map(({ id, cover, name, price, category,water, light }) => {
          if (activeCategory === '' || activeCategory === category) {
            return (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  price={price}
                  water={water}
                  light={light}
                />
                <button onClick={()=>addToCart(name,price)}> Add </button>
              </div>
            );
          }
          return null;
        })}
      </ul>
    </div>
  )
}

export default ShoppingList;
