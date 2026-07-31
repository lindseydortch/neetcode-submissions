class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length < 0) {
            return false
        } else if (s.length === 1) {
            return true
        }

        // Brute Force: Time: O(n^2) Space: O(1)
        // REMEMBER THE BELOW FOR FUTURE ALWAYS CHECK PARAMS, ALSO REMEMBER BLANK SPACES
        // we need to remove any non alphanumerical characters: 
        // const alphaStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
        
        let left = 0 
        let right = s.length - 1 

        // console.log(alphaStr)

        // Example 1: first round: left: 'w' right: 'w'
        //             left: 'a' right: 'a'
        // Example 2: first round: left: 't' right: 't' // true 
        //             left: 'a', right: 'a' // true 
        //             left: 'b', right: 'c' // false
        while (left < right) {
            // if (left === alphaStr.length - 1 && right === 0 && alphaStr[left] === alphaStr[right]) {
            //     return true
            // } else if (alphaStr[left] === alphaStr[right]) {
            //     left++
            //     right--
            // } else {
            //     return false
            // }

            while (left < right && !this.alphaNum(s[left])) {
                left++
            }

            while (right > left && !this.alphaNum(s[right])) {
                right --
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right--
        }

        return true
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}


