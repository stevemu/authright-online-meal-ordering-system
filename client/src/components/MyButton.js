import React from 'react';

function MyButton(props) {
  let {text, onClick} = props;
  return <button onClick={onClick}>{text}</button>
}


export default MyButton;
