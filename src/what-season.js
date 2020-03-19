module.exports = function getSeason(date) {
    if (date == undefined) {
        return "Unable to determine the time of year!";
    }

    if (!Number(date)) {
        throw new Error();
    }

    let month = (date.getMonth() == 11 || date.getMonth() <= 1) ? "winter" :
                (date.getMonth() >= 2 && date.getMonth() <= 4) ? "spring" :
                (date.getMonth() >= 5 && date.getMonth() <= 7) ? "summer" : "fall";

    return month;            
};
