import React, { useId } from 'react'

const UniqueId = () => {
    const id = useId();

  return (
    <div className='demo'>
        <h2>Generating unique IDs for form components using useId hook</h2>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type='email' id={`${id}-email`}></input>
        <br />
                <label htmlFor={`${id}-pw`}>Password</label>
        <input type='password' id={`${id}-pw`}></input>

    </div>
  )
}

export default UniqueId