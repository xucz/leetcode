/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    function revert(arr, start, end) {
        while (start < end) {
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start ++;
            end --;
        }
    }
    
    let t = k % nums.length;
    revert(nums, 0, nums.length - 1);
    revert(nums, 0, t - 1);
    revert(nums, t, nums.length - 1);
};

let arr = [1,2,3,4,5,6,7];
let r = rotate(arr, 0)
console.log(arr)
