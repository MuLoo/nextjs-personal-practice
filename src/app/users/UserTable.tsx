import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort'

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()
  const sortUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)
  return (
    <table className="border-separate table-auto border hover:table-fixed">
        <thead>
          <tr>
          <th className="border border-slate-400 ...">
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th className="border border-slate-400 ...">
            <Link href='/users?sortOrder=email'>Email</Link>
          </th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map(user => <tr key={user.id} className="">
            <td className='p-4 text-slate-500 border-b border-r border-slate-500'>{user.name}</td>
            <td className='p-4 text-slate-500 border-b  border-slate-500'>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
  )
}

export default UserTable