/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let wordMap = {};
    for (let i = 0; i < s.length; i ++) {
        let wordCount = wordMap[s[i]] || 0;
        wordMap[s[i]] = wordCount + 1;
    }
    let arr = [];
    for (let item in wordMap) {
        arr.push(wordMap[item]);
    }
    arr.sort((a, b) => {
        return b - a;
    });
    
    let min = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (i === 0) {
            min = arr[i];
        } else {
            if (arr[i] >= min) {
                if (min === 0) {
                    count = count + arr[i];
                } else {
                    let step = arr[i] - min + 1;
                    min = arr[i] - step;
                    count = count + step;
                }
            } else {
                min = arr[i];
            }
        }
    }
    return count;
};

minDeletions("bbcebab")



