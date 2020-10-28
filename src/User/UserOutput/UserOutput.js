import React from 'react';

const useroutput = (props) => {
  
    return(
      <div>
        <p>{props.name}</p>
        <p>{props.children}</p>
      </div>
    )
  
}

export default useroutput;