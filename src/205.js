/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    let i = 0;
    while (i < s.length) {
        let sTemp = s[i];
        let tTemp = t[i];
        
        if (sMap[sTemp] === tMap[tTemp]) {
            sMap[sTemp] = tMap[tTemp] = i;
        } else {
            return false;
        }
        i++;
    }
    return i === s.length && i === t.length;
};

console.log(isIsomorphic('paper', 'title'))
