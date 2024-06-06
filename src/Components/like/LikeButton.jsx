
import React ,{ useState } from 'react';

function LikeButton() {
  const [count,setCount]= useState(0)

  return (
    <div >
      <div>
        <button onClick={()=> setCount((prev)=>prev +1)}>Like</button>
        </div>
        <div>Likes: {count}</div>
   
    </div>
  );
}

export default LikeButton;