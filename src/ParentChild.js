import React, { useContext } from 'react'
import {UserStorage} from './App'

 function ParentChild() {
    const value=useContext(UserStorage)

    console.log(value)
  return (
    <div>
      <h1>{value} </h1>
    </div>
  )
}
export default ParentChild;
