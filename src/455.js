/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = sort(g);
    s = sort(s);
    let i = 0;
    let j = 0;
    let result = 0;
    
    while (i < g.length && j < s.length) {
        let cg = g[i];
        let cs = s[j];
        if (cs >= cg) {
            result = result + 1;
            i++;
            j++;
        } else {
            j++;
        }
    }
    return result;
    function sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let tmp = arr[i];
                    arr[i] = arr[j]
                    arr[j] = tmp;
                }
            }
        }
        return arr;
    }
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])
