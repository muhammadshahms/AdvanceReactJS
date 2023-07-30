import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        // console.log(value);
        console.log("Submit");
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" value={value} onChange={e=> setValue(e.target.value)}/>
        <input disabled={!value} type="submit" />
    </form>
  )
}

export default Form