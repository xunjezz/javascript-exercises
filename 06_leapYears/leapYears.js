const leapYears = function(year) {
    let leapYear = false;

    if( year % 400 === 0 && year % 100 === 0){
        leapYear =true;
        return leapYear;
    }else if( year % 400 !== 0 && year % 100 === 0){
        leapYear = false;
        return leapYear;
    }else if(year % 4 === 0){
        leapYear = true;
        return leapYear;
    }else{
        return leapYear;
    }

};

// Do not edit below this line
module.exports = leapYears;
