// Code your solution in this file!

const returnFirstTwoDrivers = function(driver_arr){
    return driver_arr.slice(0, 2)
}

const returnLastTwoDrivers = function(driver_arr){
    console.log(driver_arr)
    console.log(driver_arr.slice(-2))
    return driver_arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//wtf is this below for?
const createFareMultiplier = function(firstValue){
    return function(lastValue) {
        return firstValue * lastValue
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers_arr, method_to_invoke){
    return method_to_invoke(drivers_arr)
}