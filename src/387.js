var firstUniqChar = function(s) {
    if (s.length === 0) {
        return -1;
    }
    let map = {};
    for (let i = 0 ; i < s.length; i ++) {
        let item = s[i];
        if (map[item] === undefined) {
            map[item] = i;
        } else {
            map[item] = -1;
        }
    }
    let result = -1;
    for (let key in map) {
        let v = map[key];
        if (v >= 0 && (result === -1 || v < result)) {
            result = v;
        }
    }
    return result;
};
console.log(firstUniqChar("123123"))

