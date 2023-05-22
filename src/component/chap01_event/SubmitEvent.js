import React from 'react'

const SubmitEvent = () => {
  

    const send =e =>{
        e.preventdefault(); //submit 기능 중지

        const $nick = document.getElementById('nickName');
        console.log($nick.value);
    };
  
    const buttonStyle = {
        //key, value 값으로 작성 필요
            color : 'white',
            backgroundColor : 'blue',
            fontSize : '1.5em'
    };

    return (

    <form onSubmit={send}>
        <input type='text' id='nickname' name='nick'></input>
        <button style={buttonStyle} type='submit'>확인</button>    
    </form>
    
  )
    }

export default SubmitEvent