import { useState } from "react";
import { useAuth } from "../../api/useAuth";
import { Button } from "../common/Button.component";

export const RegisterCom = () => {
  const { register, loading, error } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "admin",
    username: "",
  });
console.log("userdata", userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>{" "}
            </select>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </Button>
        </form>
        {error && (
          <div className="mt-4 text-center text-red-500 text-sm border border-red-500 rounded-md p-2 bg-red-100">
            {error.message || "An error occurred during registration"}
          </div>
        )}
      </div>
    </div>
  );
};
