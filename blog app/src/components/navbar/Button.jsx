import React from 'react';

function Button({ title, style }) {
  return <button className={style}>{title}</button>;
}

export default Button;
