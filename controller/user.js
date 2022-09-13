const Users = require("../model/user");

const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getSingleUser = await Users.fingOne(id);
    res.status(200).json(getSingleUser);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  Users.findByIdAndRemove(id);
  res.json({ message: "Post sucessfully deleted" });
};

const updateUser = async (req, res) => {
  const post = req.body;
  const { id } = req.params;
  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  const updatePost = await Users.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatePost);
};

const createUsers = async (req, res) => {
  const posts = req.body;

  try {
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.usersController = {
  getUsers: getUsers,
  getUser: getUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  createUsers: createUsers,
};
