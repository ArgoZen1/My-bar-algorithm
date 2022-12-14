import React from 'react';
import './CoktailCard.sass';

//name
//ingredients list
const CoktailCard = (props) => {


    return (
        <div className='coktailCard'>
            <img className='coktailImage' src={props.image} />
            <h1 className='coktailName'>{props.name}</h1>
            <div className='separator'></div>
            <ol className='ingredientList'>
                {props.ingredients.map(ingredient =>
                    <li>{ingredient}</li>
                )}
            </ol>



        </div>
    );
};

export default CoktailCard;