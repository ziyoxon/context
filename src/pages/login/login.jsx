import React, { useEffect, useRef, useState } from "react";
import { useStateValue } from "../../context";
import * as uuid from "uuid";
import { useLocation } from "react-router-dom";

const Login = () => {
  const fname = useRef(null);
  const lname = useRef(null);
  const age = useRef(null);
  const profession = useRef(null);
  const [gender, setGender] = useState("");
  const [editUser, setEditUser] = useState(false);
  const { user, setUser } = useStateValue();

  const updateUserId = location?.search.split("=")[1];

  useEffect(() => {
    if (updateUserId) {
      editUserData();
      setEditUser(true);
    }
  }, [updateUserId]);

  const editUserData = () => {
    const updated = user.find((item) => item.id === updateUserId);
    if (updated) {
      fname.current.value = updated.fname;
      lname.current.value = updated.lname;
      age.current.value = updated.age;
      profession.current.value = updated.profession;
      setGender(updated.gender);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!gender) {
      alert("Please select a gender");
      return;
    }

    if (editUser) {
      const updatedUsers = user.map((item) =>
        item.id === updateUserId
          ? {
              ...item,
              fname: fname.current.value,
              lname: lname.current.value,
              age: age.current.value,
              profession: profession.current.value,
              gender,
            }
          : item
      );
      setUser(updatedUsers); 
      localStorage.setItem("data", JSON.stringify(updatedUsers));
    } else {
      const newUser = {
        id: uuid.v4(),
        fname: fname.current.value,
        lname: lname.current.value,
        age: age.current.value,
        profession: profession.current.value,
        gender,
      };
      const newUsers = [...user, newUser];
      setUser(newUsers);
      localStorage.setItem("data", JSON.stringify(newUsers));
    }

    setEditUser(false);
    fname.current.value = "";
    lname.current.value = "";
    age.current.value = "";
    profession.current.value = "";
    setGender(""); 
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="h-auto w-[500px] p-8 border rounded-3xl shadow-xl bg-white relative">
        <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 shadow-md"></div>
        <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 shadow-md"></div>
        <h2 className="text-2xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {editUser ? "Update" : "Create"} Form
        </h2>
        <form onSubmit={handleForm} className="space-y-5">
          <input
            ref={fname}
            required
            type="text"
            placeholder="First Name"
            className="w-full outline-none bg-gray-100 py-3 px-5 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition shadow-sm"
          />
          <input
            ref={lname}
            required
            type="text"
            placeholder="Last Name"
            className="w-full outline-none bg-gray-100 py-3 px-5 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition shadow-sm"
          />
          <input
            ref={age}
            required
            type="number"
            placeholder="Age"
            className="w-full outline-none bg-gray-100 py-3 px-5 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition shadow-sm"
          />
          <input
            ref={profession}
            required
            type="text"
            placeholder="Profession"
            className="w-full outline-none bg-gray-100 py-3 px-5 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition shadow-sm"
          />

          <div className="flex items-center gap-8 justify-center">
            <label className="flex items-center gap-2">
              <input
                required
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Male"}
                className="accent-blue-500"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                required
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "Female"}
                className="accent-blue-500"
              />
              Female
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition shadow-md"
          >
            {editUser ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
