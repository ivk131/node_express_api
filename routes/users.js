import express from "express";
const router = express.Router();

import {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} from "../controllers/users.js";

//all routes in here are starting with /users
router.get("/", getUser);

//users/2  => req.param{id:2}
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
