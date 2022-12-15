/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0;
  let middleNodeNum;
  let copyList = head;
  while (copyList !== null) {
    count++;
    copyList = copyList.next;
  }
  if (count % 2 === 0) {
    middleNodeNum = (count / 2) + 1;
  } else {
    middleNodeNum = (count / 2) + 0.5;
  }
  for (let i = 1; i < middleNodeNum; i++) {
    head = head.next;
  }
  return head;
};

// added for commit
middleNode();
