import React from 'react';
import { useContext } from 'react';
import { store } from '../App';

export default function Home() {
  let sno=1;
   const [data,setData]=useContext(store);
  return (
    <>
    <table>
        <thead>
          <th>sno</th>
          <th>name</th>
          <th>brach</th>
          <th>college</th>
        </thead>
        <tbody>
           {
             data.map(e,i)=>{}
           }
        </tbody>
    </table>
    </>
  )
}
