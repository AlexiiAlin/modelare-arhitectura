const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const User = db.User;

module.exports = {
  authenticate,
  getAll,
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  getById,
  create,
  update,
  delete: _delete
};

async function authenticate({ email, password }) {
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function getAll() {
  return await User.find().select("-hash");
}

async function getAllTeachers() {
  let users = await User.find({ role: 2 });
  users = users.map(prop => {
    let newProp = {
      noClasses: prop.classSubjects.length,
      firstName: prop.firstName,
      lastName: prop.lastName,
      id: prop._id
    };
    return newProp;
  });
  return users;
}

async function createTeacher(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  // if (userParam.password) {
  //   user.hash = bcrypt.hashSync(userParam.password, 10);
  // }
  user.hash = bcrypt.hashSync("userParam.password", 10);
  user.role = 2;

  // save user
  await user.save();
  return user;
}

async function getById(id) {
  return await User.findById(id).select("-hash");
}

async function getTeacher(id) {
  return await User.findById(id);
}

async function create(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}

async function update(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw "User not found";
  if (
    user.email !== userParam.email &&
    (await User.findOne({ email: userParam.email }))
  ) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function updateTeacher(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw "User not found";
  if (
    userParam.email &&
    user.email !== userParam.email &&
    (await User.findOne({ email: userParam.email }))
  ) {
    throw 'Email "' + userParam.email + '" is already taken';
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
