class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length < 0) {
            return false 
        }
        
        // Brute Force - Time: O(n^2) Space: O(1) 
        // Sort - Time: O(nlogn) Space: O(1) - sorting takes extra time complexity 
        // If we sacrifice space complexity, we can improve our time complexity, by using a hash set 
        // Hash Set - Time: O(n) Space: O(n)
        const hashset = new Set()

        for (const num of nums) {
            if (hashset.has(num)){
                return true
            }
            hashset.add(num)
        }
        return false 
    }
}
