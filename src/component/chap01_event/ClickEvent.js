

//rafce
import React from 'react';
import './style.css';

const ClickEvent = () => {

    // const $btn1 = document.getElementById('btn1');
    // $btn1.onclick = e => {
    //   alert('클릭 잘했다!');
    // };

    const greeting = e =>{
        alert('크크크크크클리이이익')
    }

    const changeBox =e =>{
        const $box = document.querySelector('.box');
        $box.style.background = 'orange';
        $box.style.width = '150px';
        $box.style.height = '150px';
    }
  return (
    <>
    <button id='btn1' onClick={() =>{ alert('클릭잘했슈~')}}>클릭해보슈</button>
    <button id='btn2' onClick={greeting}>클릭2</button>
    <button id='btn3' onMouseOver={changeBox}>클릭3</button>
  
  <div className='box'></div>
  </>
  )
}

export default ClickEvent