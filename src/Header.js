import React from 'react';

import QueryForm from './QueryForm';

const style = {
  float: 'center',
  display: 'inline'
}

function Header() {
  return (
    <div style={style}>
      <h2>Historical Upper-Air Soundings</h2>
      <QueryForm/>
    </div>
  )
}

export default Header;