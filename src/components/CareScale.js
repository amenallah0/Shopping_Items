import React from 'react'
import sun from './../assets/sun.svg';
import water from './../assets/water.svg';


function CareScale({scaleValue,careType}) {
    const quantityLabel={
        1:"little",
        2:"moderate",
        3:"much"
    }
    const rang=[1,2,3];
    const scaleType = careType==="light"?
    (<img src={sun} alt='sun.icon' />):
    (<img src={water} alt='water.icon' />);

    
  return (
    <div onClick={()=>alert(`This plant requires ${quantityLabel[scaleValue]} ${careType==="light"?"light":"watering"}`)}>
    {rang.map((rangElem)=>scaleValue>=rangElem?
    (<span key={rangElem.toString()}>{scaleType}</span>):null)}
        </div>
  );

}
export default CareScale