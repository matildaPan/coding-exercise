/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  // if(list1.length === 0){
  //     return list2;
  // }
  // if(list2.length === 0){
  //     return list1;
  // }
  
  console.log(list1, list2)
  
  let mergedList = new ListNode()
  if(list1.val < list2.val){
      mergedList.val = list1.val;
      list1.val = list1.next;
  }else{
      mergedList.val = list2.val;
      list2.val = list2.next;
  }
  
  return mergedList.next(mergeTwoLists(list1, list2))
  
  
  
};

mergeTwoLists();