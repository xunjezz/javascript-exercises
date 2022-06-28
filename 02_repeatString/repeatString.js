function repeatString(string, num){
    // let i = num;
    let fullString = "";
    const error = "ERROR";
    // while(i > 0){
    //    fullString += string;
    //    i--;

    //  }
    for(let i = num; i > 0; i--){
        fullString += string;
    }
    if(num < 0){
        return error;
    }
     return fullString;
}






repeatString("hey",5);

// Do not edit below this line
module.exports = repeatString;
