let user = {
  role: "editor",
  age: 18,
};

const isAuthenticated = (user) => {
  return user.role !== "guest";
};

const authenticate = (user) => {
  if (!isAuthenticated(user)) return "Please log in";

  if (user.role === "admin") return "Welcome to dashboard";
  else return "Access Denied";
};

const messege = authenticate(user);
console.log(messege);
