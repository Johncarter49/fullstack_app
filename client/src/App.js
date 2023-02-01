import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:7000/user/all")
        .then((res) => setUsers(res.data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/user/add", {
        name,
        email,
        phone
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="App">
      <h1>All users</h1>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.email} - {user.phone}
        </li>
      ))}

      <section>
        <h2 className="text-center">post request</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone" className="form-label">
              phone
            </label>
            <input
              type="phone"
              className="form-input"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-block">
            send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;