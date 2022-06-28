const ftoc = function(originalF) {
let convertedC = (originalF - 32) * (5 / 9);
if(Number.isInteger(convertedC)){
  return convertedC;
}
convertedC = Math.round(convertedC * 10) / 10;
return convertedC;

};

const ctof = function(originalC) {
let convertedF = originalC * (9 / 5) + 32;
if(Number.isInteger(convertedF)){
  return convertedF;
}  
convertedF = Math.round(convertedF * 10) / 10;
return convertedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
