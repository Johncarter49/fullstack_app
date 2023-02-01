const fs = require("fs/promises");

//get all users
const getUsers = async (req, res) => {
  try {
    let data = await fs.readFile("./data.json", "utf8");
    data = JSON.parse(data);
    res.json({ msg: "getting all users", data });

} catch (error) {
    console.log(error);
  }
};

//add new user
const addUsers = async (req, res) => {
  try {
    const data = await fs.readFile("./data.json", "utf8");
    const { name, email, phone } = req.body;
    let jsonData = JSON.parse(data);
    jsonData.push({ name, email, phone });
    const updatedData = JSON.stringify(jsonData);
    await fs.writeFile("./data.json", updatedData);
    res.json({ msg: "user added!" });
 
} catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const updateUsers = async (req, res) => {
  try {
    const data = await fs.readFile("./data.json", "utf8");
    const { index } = req.params;
    const { name, email, phone } = req.body;
    let jsonData = JSON.parse(data);
    jsonData[index].name = name;
    jsonData[index].email = email;
    jsonData[index].phone = phone;
    const updatedData = JSON.stringify(jsonData);
    await fs.writeFile("./data,json", updatedData);
    res.json({ msg: "user updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { getUsers, addUsers, updateUsers };
