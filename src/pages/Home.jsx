import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  async function getUser() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user">
              <div onClick={() => navigate(`${user.id}`)} className="user-card">
                <div className="user-card__container">
                  <h3>{user.name}</h3>
                  <p>
                    <b>Email:</b> {user.email}
                  </p>
                  <p>
                    <b>Phone:</b> {user.phone}
                  </p>
                  <p>
                    <b>Website:</b> {user.website}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
