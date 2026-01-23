const user = {
  username: "bablubadmas",
  email: "bablu@email",
  password: "********",
  city: "phagwara",
  zip: 144411,
};

handleSubmit = (obj) => {
  const { username, email, ...metadata } = obj;
  return { username, isAdmin: false, ...metadata };
};

const newUser = handleSubmit(user);
console.log(newUser);
