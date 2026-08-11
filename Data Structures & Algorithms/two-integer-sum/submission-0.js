class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Params - Array of numbers and a target 
        // Return - indeces of numbers from array that add up to the target 
            // There will always be a pair that satifies this condition 
            // I think we can assume no repeat numbers 
            // Assume that the array is sorted? 
            // Make sure the smallest index is first 
        // Examples - nums=[4, 6, 8] tar=14 -> [1,2], nums=[5, 7, 12] tar=17 -> [0,2]
        // Pseudocode 

        // 1. Loop through the array and see if the numbers match 
        // Loop 1: i = 4 j = 6, does not equal target so move on, i = 4 j = 8, does not equal target so i moves on, i=6 j=8 -> true return indeces 
        // Brute Force -> time: O(n^2) space: O(1)
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j]
        //         }
        //     }
        // }

        // Hash Map - O(n) for space and time 
        const prevMap = new Map() // val : index

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i]
            } 

            prevMap.set(nums[i], i)
        }

    }
}
