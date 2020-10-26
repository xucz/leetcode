/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let arr = {};
    for (let i = 0, len = keysPressed.length; i < len; i ++) {
        let key = keysPressed[i];
        let dur = 0;
        if (i === 0) {
            dur = releaseTimes[i];
        } else {
            dur = releaseTimes[i] - releaseTimes[i - 1];
        }
        if (!(arr[key] && arr[key] > dur)) {
            arr[key] = dur;
        }
    }
    let maxWord;
    let maxCount = 0;
    for (let item in arr) {
        if (arr[item] > maxCount) {
            maxWord = item;
            maxCount = arr[item];
        } else if (arr[item] === maxCount && item > maxWord) {
            maxWord = item;
        }
    }
    return maxWord;
};

let releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
console.log(slowestKey(releaseTimes, keysPressed))
