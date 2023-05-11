// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = drivers.slice(0,2);

const lastTwoDrivers = drivers.slice(2)

function returnFirstTwoDrivers(){
    return firstTwoDrivers;
}

function returnLastTwoDrivers() {
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi) {
    return function fareMultiplier(fare) {
        return fare*multi
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier*2;
}

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, select) {
    return select(drivers);
}