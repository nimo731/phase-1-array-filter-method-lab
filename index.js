// Code your solution here
// findMatching
function findMatching(drivers,searchName){
    return drivers.filter(driver => driver.toLowerCase()===searchName.toLowerCase());
}

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

//fuzzyMatch
function fuzzyMatch (drivers,letters){
return drivers.filter(driver =>driver.toLowerCase().startsWith(letters.toLowerCase()));
}

//matchName
function matchName (drivers,searchName){
    return drivers.filter(driver => driver.name === searchName);
}