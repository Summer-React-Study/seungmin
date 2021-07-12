import React from 'react';

function Fruit({ fruit }) {
    return (
        <div className="fruit-item">
            <h3>{fruit.name}</h3>
            <p>당도 : {fruit.sweetness}</p>
        </div>
    )
}

function FruitList({ fruits }) {
    return (
        <div className="fruit-list">
            {fruits.map(fruit => (
                <Fruit fruit={fruit} key={fruit.key} />
            ))}
        </div>
    )
}

export default FruitList;