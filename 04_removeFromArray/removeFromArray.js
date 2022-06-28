const removeFromArray = (array, ...theArgs) => {
    // let normalArray = theArgs;
    

    for(let i = array.length; i >= 0; i--){
        // let len = theArgs.length;
            for(let j = 0; j<= theArgs.length; j++){
                if (array[i] === theArgs[j]){
                    array.splice(i, 1);
                }

            }    
    }
        return array;
}

// Do not edit below this line
module.exports = removeFromArray;
