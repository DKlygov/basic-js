module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turnsResult = Math.pow(2, disksNumber) - 1;
    var secondsResult = turnsResult / (turnsSpeed/3600);
    var result = {
        turns: turnsResult,
        seconds: secondsResult
    };
    return result;
}