// Code your solution here
function findMatching(drivers, string) {
    const newDrivers = drivers.filter(word => word.toUpperCase() === string.toUpperCase())
        return newDrivers
}

function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(word => word.startsWith(string))
        return newDrivers
}

function matchName(drivers, string) {
    const newArr = drivers.filter(curItem => curItem.name === string)
        return newArr
}
