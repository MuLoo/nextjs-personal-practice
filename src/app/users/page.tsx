import Link from 'next/link';
import { Suspense } from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: {
    sortOrder: string;
  }
}
const UserPage = async ({ searchParams: { sortOrder }}: Props) => {

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn btn-primary'>New User</Link>
      <Suspense fallback={<p>loading....</p>} >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage
// 可以动态设置 meta data，利于 seo
export async function generateMetadata() {
  return {
    title: 'Dynamic Data',
    description: 'Testing Dynamic Data'
  }
}