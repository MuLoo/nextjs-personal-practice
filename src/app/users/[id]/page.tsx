import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: {
    id: number;
  }
}

const UserDetaulPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <div>UserDetailPage { id }</div>
  )
}

export default UserDetaulPage