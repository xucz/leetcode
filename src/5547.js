var checkArithmeticSubarrays = function(nums, l, r) {
    let result = [];
    for (let i = 0, len = l.length; i < len; i ++) {
        let ll = l[i];
        let rr = r[i];
        let arr = nums.slice(ll, rr + 1);
        result[i] = checkArr(arr.sort((a,b) => {return a - b}))
    }
    return result;
    function checkArr(arr = []) {
        if (arr.length >= 2) {
            let diff = arr[1] - arr[0];
            let flag = true;
            for (let i = 1, len = arr.length; i < len; i ++) {
                if (arr[i] - arr[i-1] !== diff) {
                    flag = false;
                    break;
                }
            }
            return flag;
        } else {
            return false;
        }
    }
};

let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10]
let l = [0,1,6,4,8,7]
let r = [4,4,9,7,9,10]
console.log(checkArithmeticSubarrays(nums, l, r))
