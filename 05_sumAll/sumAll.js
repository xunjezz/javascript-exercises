const sumAll = function(first,last) {

let sum = 0; // the sum over iteration between entered numbers

if(first < 0 || last < 0 || typeof first != "number" || typeof last != "number" ){
    
    return 'ERROR';
}
if(last > first){
    for(let i = first; i<= last; i++ ){  // loop through all numbers between first and last, adding to sum each one
        sum += i;
    
    }
}else if(first > last){
    for(let i = last; i<= first; i++ ){  // loop through all numbers between first and last, adding to sum each one
        sum += i;                         //if first number is the greater  
    }
}       
return sum;
};

// Do not edit below this line
module.exports = sumAll;
