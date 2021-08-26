import LinkedList from "./LinkedList";

const list = new LinkedList();

// console.log(list);

list.add("one");
list.add("two");
list.add("three");
list.add("four");
// console.log(JSON.stringify(list));

// console.log(list.length());

list.pop();
// console.log(JSON.stringify(list));
list.remove("one");
list.remove("three");
list.remove("two");
console.log(JSON.stringify(list));

// console.log(list.length());

list.clear();
// console.log(JSON.stringify(list));

// console.log(list.length());
