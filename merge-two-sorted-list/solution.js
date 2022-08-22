/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// [1,2,4]
// [1,3,4]

var mergeTwoLists = function(list1, list2) {
    
  if(list1.length === 0) return list2;
  if(list2.length === 0) return list1;
  
  const mergedList = []; 
  const head1 = 0;
  const head2 = 0;
  
  if(list1[head1] < list2[head2]){
      mergedList.push(list1[head1]);
      list1.shift();
  }else{
      mergedList.push(list2[head2]);
      list2.shift();
  }
  const remainingList = mergeTwoLists(list1, list2);
  return mergedList.concat(remainingList);

};

const result1 = mergeTwoLists([1,2,4], [1,3,4]);
console.log(result1.toString() == [1,1,2,3,4,4].toString() ? 'pass' : 'fail');