const person = {
  name: "vikas",
  age: 21,
  gender: "M",
};
console.log(person);

//shallow copy
const cp = person;
cp.name = "newname";
console.log(person);
console.log(cp);

//deep copy
const cpnew = { ...person };
cpnew.name = "newname";
console.log(person);
console.log(cpnew);
