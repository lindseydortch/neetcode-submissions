class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Params - string 
        // Questions I would ask: would we expect any letters, or only the brackets listed? 
        // Return - boolean 
        // Examples: s="[]" -> true, s="([{}])" -> true, s="[(]]" -> false, s="([)]" -> false, s="((()))" -> true
        // Note: all pairs within a string, must match up 
        // Pseudocode: brute force -> loop through from beg of string and loop through end, if they don't match return false, optimal solution -> two pointers one to the left and right and as you increase you would match the variable if they don't matches then you return false, if all match, then you would return true (match means type of brackets) --> reminder the opening bracket needs to be closed 
        // Note: We always remove from the end of the list or the top of the stack 

        // let left = 0 
        // let right = s.length - 1

        // while (left < right) {
        //     console.log("left", left, s[left])
        //     console.log("right", right, s[right])
        //     console.log(s[left] === s[right])
        //     if (s[left] === s[right]) {
        //         left++ 
        //         right-- 
        //     } else {
        //         return false 
        //     }
        //     return true
        // }

        // O(n) - space and time 
        const stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for (let c of s) {
            if (closeToOpen[c]) {
                if (stack.length > 0 && stack[stack.length-1] === closeToOpen[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
