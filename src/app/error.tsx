"use client"
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('error:', error);
  
  return (
    <>
      <div>An Unexpected Error Occurred</div>
      <button className='btn btn-sm' onClick={reset}>Retry</button>
    </>
  )
}

export default ErrorPage