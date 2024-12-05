import React, { useEffect } from "react";
import { useStateValue } from "../../context";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();

  const deleteUser = (id) => {
    const newUser = user.filter((item) => item.id !== id);
    setUser(newUser);
    localStorage.setItem("data", JSON.stringify(newUser));
  };
  const editUser = (id) => {
    navigate(`/login?q=${id}`);
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data")) || [];
    setUser(localData);
  }, [setUser]);
  return (
    <div className="w-full min-h-screen py-10 bg-gradient-to-br from-blue-100 to-purple-100">
      <h2 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8">
        Users Data
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {user?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-6 gap-3 transform transition hover:scale-105"
          >
            <div className="h-[150px] w-[150px] rounded-full bg-gradient-to-br from-blue-200 to-purple-300 overflow-hidden flex items-center justify-center shadow-inner">
              <span className="text-gray-400 text-lg font-medium">
                No Image
              </span>
            </div>
            <h1 className="text-xl font-extrabold text-gray-800 mt-4">
              {item.fname} {item.lname}
            </h1>
            <p className="text-sm text-gray-600">{item.profession}</p>
            <p className="text-sm text-gray-600">{item.age} years old</p>
            <p className="text-sm text-gray-600">Gender: {item.gender}</p>
            <div className="w-full flex gap-2 items-center justify-center mt-4">
              <button
                onClick={() => deleteUser(item.id)}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => editUser(item.id)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
