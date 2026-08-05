class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Params - nums (integers - assuming distinct means no repeating numbers, based off of the examples given, is the input the same length every time?), target 
        // Return - the index of the target, if it doesn't exist we return -1 
        // Examples - nums: [-2, 1, 2, 4, 8] target=2 -> 2 (we will need to watch for neg nums), [-1, 0, 3, 5, 9] target=5 -> 5, [-3, 4, 5, 6] target=8 -> -1 
        // Pseudocode 
        // Brute Force: 1. loop through the whole array and see if any of the numbers match the target -> would not be O(logn) 
        // Performant: 

        // Check length: 
    //     if (nums.length === 1) {
    //         if(nums[0] === target) {
    //             return 0
    //         } 
    //         return -1
    //     }

    //     // 1. Set pointers 
    //     let low = 0
    //     let high = nums.length - 1 

    //     // 2. loop through the array 
    //     while (low < high) {
    //         if (nums[low] === target) {
    //             return low
    //         } else if (nums[high] === target) {
    //             return high 
    //         } else {
    //             low++
    //             high--
    //         }
    //     }

    //     return -1 -> this solution only works if the array is even 

        // Binary Search - Lower bound because better for sorted arrays 
        let left = 0 
        let right = nums.length 

        while (left < right) {
            let m = left + Math.floor((right - left) / 2)
            if (nums[m] >= target) {
                right = m 
            } else {
                left = m + 1
            }
        }
        return left < nums.length && nums[left] === target ? left : -1



    }


}
