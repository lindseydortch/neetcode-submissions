/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // Parameters - ListNode class 
        // Return - ListNode 
        // Examples - [0,1,2,3] -> [3,2,1,0], [] -> [], [5,6,7,8] -> [8,7,6,5]
        // Pseudocode 

        // Iteratively - Two Pointers - time: O(n), space: O(1)
        // you want a cur and a prev pointer (prev set to null)
        // let prev = null
        // let curr = head

        // while(curr) {
        //     let temp = curr.next 
        //     curr.next = prev 
        //     prev = curr
        //     curr = temp
        // }

        // return prev

        // Recursively - not the best solution because we have to add memory 
        if (!head) {
            return null 
        }

        console.log(head)

        let newHead = head 
        if (head.next) {
            newHead = this.reverseList(head.next)
            head.next.next = head
        }

        head.next = null 

        return newHead
    }
}
