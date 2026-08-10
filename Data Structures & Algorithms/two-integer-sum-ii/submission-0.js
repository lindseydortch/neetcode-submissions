class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Params - array of numbers 
        // Return - index of the numbers that add up to the target in an array
            // Always one valid solution, so we will always return the indeces 
        // Examples - nums=[1,2,3,4] tar=3 -> [1,2], nums=[3,4,5,6] tar=11 -> [2,3]
        // Pseudocode 

        // 1. Create a holder variable 
        // 2. Loop through and see if it adds up to the target 
        // 3. If none of them loop through until we get the target 

        for(let i = 0; i < numbers.length; i++) {
            let l = i + 1,
                r = numbers.length - 1

            let tmp = target - numbers[i]

            while (l <= r) {
                let mid = l + Math.floor((r - l) / 2) 
                if (numbers[mid] === tmp) {
                    return [i + 1, mid + 1]
                } else if (numbers[mid] < tmp) {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }
        }
        return []
    }
}
