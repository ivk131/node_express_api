import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUser = (req, res) => {
  console.log(users);
  res.send("Hi, User!");
};

export const createUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);
  console.log(users);
  res.send(`user  add to DB! `);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.Id === id);
  res.send(`wow, we are foundUser ${foundUser}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { fName, lName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (fName) user.fName = fName;
  if (lName) user.lName = lName;
  if (age) user.age = age;

  res.send(`user with id: ${id} has been updated! `);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`user with id: ${id} deleted from DB`);
};
