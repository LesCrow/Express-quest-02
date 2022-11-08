const database = require("./database");

const getUsers = (req, res) => {
  database.query("select * from users").then(([users]) => {
    res.status(200).json(users);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database.query("select * from users where id = ?", [id]).then(([users]) => {
    if (users[0]) {
      res.status(200).json(users[0]);
    } else {
      res.status(404).send("Not found");
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
};
