import { useState } from 'react'

function Users({ users }) {
  const [ search, setSearch ] = useState( '' )
  const [ search2, setSearchTwo] = useState('')

  const usersOver18 = users

  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  const filteredUsersYounger = users.filter((user) => 
    user.age < search2
  )

  return (
    <>
     <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
      <input 
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}

      >
      </input>

      <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Users Table</h2>

      <table>
        <thead>
          <tr className="font-sans text-base font-bold md:text-lg lg:text-xl">
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

      <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Users over 18:</h2>

      <ul>
        {users.filter((user) => user.age > 18).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Mostrar usuarios menor que... </h2>
      <input 
            type="text"
            placeholder="Entra la edad aquí..."
            value={search2}
            onChange={(e) => setSearchTwo(e.target.value)}
      >
      </input>

      <ul>
        {filteredUsersYounger.map((user) => (
          <li key={user.id}>{user.name}, Edad: {user.age}</li>
        ))}
      </ul>
      <h3>Cantidad: {filteredUsersYounger.length}</h3>
      </div>
    </>
  );
}

export default Users;
