import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
 
    return (
      <div className='text-center'>
        <img className='my-5' src={loading} alt='error' />
      </div>
    )
  
}
export default Spinner