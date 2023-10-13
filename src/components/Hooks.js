import React, { useEffect, useState } from 'react';

export default function Hooks() {
    let [count,setCount] = useState(1);
    useEffect(()=>{console.log('hello')},{count});

  return (
      <>
      <h1>{ count }</h1>
      <button onClick={()=>setCount(count+1)} class="btn bg-danger">click</button>
      <button onClick={()=>setCount(count-1)} class="btn bg-primary">click</button>
      </>
  )
}
