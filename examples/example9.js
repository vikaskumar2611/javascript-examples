const persons = [
  [
    {
      name: "vikas",
      age: 2,
    },
    {
      name: "Rudra",
      age: 3,
    },
  ],
  [
    {
      name: "vikas",
      age: 2,
    },
    {
      name: "Rudra",
      age: 3,
    },
  ],
];

//flatMap -> flats all nested arrays into one single array

const names = persons
  .flatMap((p, i) => {
    return p.map((x) => x.name);
  })
  ?.forEach((n) => console.log(n));

//console.log(names);
