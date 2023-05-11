function updateGuess(inputs, randomNumber) {

    for(let property of Object.keys(inputs)) {
        if(inputs[property]>randomNumber) {
            inputs[property]=`${inputs[property]} is too high`
        } else if (inputs[property]<randomNumber) {
            inputs[property]=`${inputs[property]} is too low`
        } else if (inputs[property]===randomNumber) {
            inputs[property]=`${inputs[property]} is just right`
        };
    }
    return inputs;
} 


module.exports = updateGuess