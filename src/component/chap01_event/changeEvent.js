import React from 'react'

const changeEvent = () => {
  
  const changeValue = e =>{
    console.log(`value : ${e.target.value}`);
  }


  
    return (
    <>
    <input type='text' onChange={changeValue}></input>

    <select onChange={changeValue}> 
        <option value='pizza'>피자</option>
        <option value='chicken'>치킨</option>
        <option value='hamburger'>햄버거</option>
    </select>
    </>
  )
}

export default changeEvent