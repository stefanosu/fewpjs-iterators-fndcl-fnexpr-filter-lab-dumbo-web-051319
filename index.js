// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const findMatching = (arr, name) => { 
    return arr.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
    
    })
}


const fuzzyMatch = (arr, someName) => {
    let nameLength = someName.length 
    return arr.filter((driverName) => {
        return driverName.slice(0, nameLength) === someName
    })
}


const matchName = (arr, name) => {
    return arr.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}

