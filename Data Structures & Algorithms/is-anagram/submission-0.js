class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Params - two strings - alphanumeric - lowercase 
        // Return - boolean 
        // Examples - s="rat" t="tar" -> true, s="jet" t="set" -> false
        // Pseudocode 
        // 1. loop through both strings, but at different times 2. create a object that stores the counts of each letter 

        // Loop 1: {r: 1, t: 1}, Loop 2: {r:1, t:1, a:2} Loop 3: {r: 2, t:2, a:2}
        // let countObj = {}

        // for(let letter in s) {
        //     if (countObj[s[letter]] === s[letter]) {
        //         console.log(true)
        //     } else {
        //         countObj = countObj[s[letter]]
        //     }
        // }

        if (s.length !== t.length) {
            return false 
        }

        const countS = {}
        const countT = {}
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = (countS[s[i]] || 0) + 1
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false
            }
        }

        return true
    }
}
