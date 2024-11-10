// 21. Merge Two Sorted Lists
var mergeLists = function (list1, list2) {
  var dummy = new ListNode(0);
  var current = dummy;
  while (list1.next != null && list2.next != null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1.next !== null)
    current.next = list1;

  if (list2.next !== null)
    current.next = list2;



  return dummy.next;

}