import React from 'react'
import { BiError } from "react-icons/bi";

function Errorpage() {
  return (
    <div className='error-page'>
      <BiError className='icon'/>
      <h3>It looks like the page you are looking for does not exist</h3>
    </div>
  )
}

export default Errorpage
