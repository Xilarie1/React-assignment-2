import { useState } from "react";

export function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(() => [...mockData]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (!username.trim() || !email.trim()) return;
    setUsers((prev) => [...prev, { username, email }]);
    setUsername("");
    setEmail("");
  }

  return (
    <>
      <ul>
        {users.map((u, i) => (
          <li key={u.email || i}>
            {u.username} - {u.email}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </>
  );
}
