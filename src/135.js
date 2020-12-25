/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(ratings.length === 0) {
        return 0;
    }
    let tmp = ratings.concat([]);
    for (let i = 0; i < tmp.length; i ++) {
        for (let j = i; j < tmp.length; j ++) {
            if (tmp[i] > tmp[j]) {
                let itemTmp = tmp[i];
                tmp[i] = tmp[j];
                tmp[j] = itemTmp;
            }
        }
    }
    
    let last = undefined;
    let result = new Array(ratings.length);
    for(let k = 0; k < tmp.length; k ++) {
        if (tmp[k] !== last) {
            let val = last = tmp[k];
            let cache = [];
            for (let m = 0; m < ratings.length; m ++) {
                if (val === ratings[m]) {
                    if (m === 0) {
                        if (result[m + 1]) {
                            cache.push(m)
                        } else {
                            result[m] = 1;
                        }
                        continue;
                    }
                    if (m === ratings.length - 1) {
                        if (result[m - 1]) {
                            cache.push(m)
                        } else {
                            result[m] = 1;
                        }
                        continue
                    }
                    if (result[m - 1] || result[m + 1]) {
                        cache.push(m)
                    } else {
                        result[m] = 1;
                    }
                }
            }
            for (let n = 0; n < cache.length; n ++) {
                let index = cache[n];
                if (index === 0) {
                    if (ratings[index] === ratings[index + 1]) {
                        result[n] = result[index + 1];
                    } else {
                        result[n] = (result[index + 1] || 0) + 1;
                    }
                    continue;
                }
                if (index === ratings.length - 1) {
                    if (ratings[index] === ratings[index - 1]) {
                        result[index] = result[index - 1];
                    } else {
                        result[index] = (result[index - 1] || 0) + 1;
                    }
                    continue;
                }
                let ratingsLeft = ratings[index - 1];
                let ratingsRight = ratings[index + 1];
                let ratingsCurrent = ratings[index];
                
                let left = result[index - 1];
                let right = result[index + 1];
                
                if (left === undefined) {
                    if (ratingsRight === ratingsCurrent) {
                        result[index] = right;
                    } else {
                        result[index] = right + 1;
                    }
                } else if (right === undefined) {
                    if (ratingsLeft === ratingsCurrent) {
                        result[index] = left;
                    } else {
                        result[index] = left + 1;
                    }
                } else {
                    if (ratingsCurrent !== ratingsRight && ratingsCurrent !== ratingsLeft) {
                        let max = left > right ? left : right;
                        result[index] = max + 1;
                    } else if (ratingsCurrent === ratingsRight && ratingsCurrent === ratingsLeft) {
                        result[index] = 1;
                    } else if (ratingsCurrent === ratingsLeft) {
                        result[index] = right + 1;
                    } else if (ratingsCurrent === ratingsRight) {
                        result[index] = left + 1;
                    }
                }
            }
            cache = [];
        }
    }
    let count = 0;
    for (let t = 0; t < result.length; t++) {
        count = count + result[t];
    }
    return count
};

candy([1,2,4,4,3])
