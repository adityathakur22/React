import React from 'react'
import { useParams } from 'react-router-dom'

const paramComp = () => {
    const {id}=useParams();
  return (
    <div>
        params:{id}
    </div>
  )
}

export default paramComp