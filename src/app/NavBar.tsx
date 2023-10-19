"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className='flex bg-slate-200 p-5 mr-5'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users" className='mr-5'>Users</Link>
      { status === 'loading' && <span className="loading loading-spinner loading-xs"></span>}
      {status === 'authenticated' && <div className='ml-auto'>
        {session.user?.image && <Image src={session.user?.image} width={30} height={30} alt="avatar" className=' inline-block rounded mr-2' />}
        <span className=' font-bold text-xs'>
          {session.user!.name}
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
        </span>
      </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin" className='mr-5'>Login</Link>}
    </div>
  )
}

export default NavBar