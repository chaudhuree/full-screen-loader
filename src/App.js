import "./styles.css";
import {useEffect, useState} from 'react'


export default function App() {
  const [loader,setLoader]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(true)
    },5000)
  },[])
  return (
    <div className="App">
      <div className={`${loader ? "loading":""}`}></div>
      <h1>after 5 sec set loader will be true</h1>
      <p>then it will add class loader in the first div</p>
      <p>and loading will appear</p>
      
    </div>
  );
}
