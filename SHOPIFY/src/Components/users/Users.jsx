import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, updateUser } from "../../redux/userSlice";
import style from "./Users.module.css"; // Import CSS file

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [genderFilter, setGenderFilter] = useState("all");
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    genderFilter === "all" ? true : user.gender === genderFilter
  );

  return (
    <div className={style.container}>
      <h2 className={style.heading}>User Details</h2>
      <p className={style.description}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum aspernatur atque consequatur assumenda fuga libero a! Iusto ullam aliquam sunt quos minima facere ex quibusdam voluptatum eligendi autem, quisquam adipisci aliquid cumque a assumenda aut dolorem, porro ipsa explicabo! Ab in ullam provident distinctio accusamus dolorum nam aspernatur quia rem iure, corporis sit consectetur sequi blanditiis nemo explicabo, quas maxime molestias sunt. Rerum repellat excepturi illo eius minus commodi, atque laudantium quis necessitatibus suscipit omnis aut delectus. Excepturi totam a adipisci sequi quis, numquam ullam voluptatibus quibusdam repudiandae quae at ratione odit quasi omnis tempore ea maiores corporis assumenda.
      </p>

      {/* Gender Filter */}
      <div className={style.filter}>
        <label>
          <input
            type="radio"
            name="gender"
            value="all"
            checked={genderFilter === "all"}
            onChange={() => setGenderFilter("all")}
          />{" "}
          All
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={genderFilter === "male"}
            onChange={() => setGenderFilter("male")}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={genderFilter === "female"}
            onChange={() => setGenderFilter("female")}
          />{" "}
          Female
        </label>
      </div>

      {/* Users Table */}
      <div className={style["table-container"]}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.login?.uuid}>
                <td>
                  <img
                    src={user.picture?.thumbnail}
                    alt={user.name?.first || "User"}
                  />
                </td>
                <td>
                  {user.name?.first} {user.name?.last}
                </td>
                <td>{user.email || "N/A"}</td>
                <td>{user.gender}</td>
                <td className={style.actions}>
                  <button
                    onClick={() => dispatch(deleteUser(user.login?.uuid))}
                  >
                    Delete
                  </button>
                  <button onClick={() => setEditUser(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update User Form */}
      {editUser && (
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateUser(editUser));
            setEditUser(null);
          }}
        >
          <input
            type="text"
            value={editUser.name?.first || ""}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                name: { ...editUser.name, first: e.target.value },
              })
            }
          />
          <input
            type="email"
            value={editUser.email || ""}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Users;
