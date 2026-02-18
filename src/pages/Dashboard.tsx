import { useEffect, useState } from "react";
import { getUsers } from "../services/authService";

interface User {
  name: string;
  email: string;
  timestamp: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = getUsers();
    setUsers(storedUsers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Registered Users
      </h1>

      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">
                Name
              </th>
              <th className="border px-4 py-2 text-left">
                Email
              </th>
              <th className="border px-4 py-2 text-left">
                Signup Time
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  {user.name}
                </td>
                <td className="border px-4 py-2">
                  {user.email}
                </td>
                <td className="border px-4 py-2">
                  {new Date(user.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;