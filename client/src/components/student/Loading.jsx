import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {

  const { path } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (path) {
      const timer = setTimeout(() => {
        navigate(`/${path}`)
      }, 5000)
      return () => clearTimeout(timer);
    }
  })

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-16 sm:w-20 aspect-square border-8 border-gray-300 border-t-8 border-t-blue-800 rounded-full animate-spin'>

      </div>
    </div>
  )
}

export default Loading