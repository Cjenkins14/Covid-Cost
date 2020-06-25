import React from 'react';

function MedCost(count) {
    let totalCost = parseInt(count.count) * 30000;
    let string = totalCost.toString();
    let result = string.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    return (
        <>
        <h3>New hospital patients (daily): {count.count}</h3>
        <h3>Medical costs (daily): ${result}</h3>
        </>
    )
}

export default MedCost;