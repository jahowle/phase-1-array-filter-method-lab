// Code your solution here
function fuzz(element) {

}

function findMatching(drivers, string) {
    return drivers.filter(element => element.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(element => element.startsWith(string));
}

function matchName(driverObject, string) {
    return driverObject.filter(element => element.name === string);
}