const reverseString = function(string) {
    let backwardsString = "";

    for(let i = string.length-1; i >=0; i--){
        backwardsString += string[i];
        
    }
    return backwardsString;
};

// Do not edit below this line
module.exports = reverseString;
