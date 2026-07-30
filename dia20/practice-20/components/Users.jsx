import { useState } from 'react'

function Users({ users }) {
  const [ search, setSearch ] = useState( '' )

  const usersOver18 = users

  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>

      <input 
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}

      >
      </input>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>

          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </thead>
      </table>

            <h2>Users over 18:</h2>

      <ul>
        {users.filter((user) => user.age > 18).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Users Table</h2>
    </>
  );
}

export default Users;
