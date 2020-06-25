import React from 'react';

function Cost(count) {
    let totalCost = parseInt(count.count) * 10000000;
    let string = totalCost.toString();
    let result = string.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    return (
        <div className='death-cost'>
        <h3>Cumulative deaths: {count.count}</h3>
        <h3>Total Human Cost: ${result}</h3>
        </div>
    )
}

export default Cost;