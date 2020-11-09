/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let nums = [0, 1];
    let max = 1;
    if (n == 0) {
        return 0;
    }
    for (let i = 2; i < n + 1; i ++) {
        if (i % 2 === 0) {
            let i1 = nums[i / 2];
            nums[i] = i1;
            if (i1 > max) {
                max = i1;
            }
        } else {
            let c = (i - 1)/2;
            let i2 = nums[c] + nums[c + 1];
            nums[i] = i2;
            if (i2 > max) {
                max = i2;
            }
        }
    }
    return max;
};
console.log(getMaximumGenerated(0))
