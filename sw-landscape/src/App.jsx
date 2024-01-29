import { useEffect, useState } from 'react'
import Background from "./Components/Background/Background";
import Navbar from './Components/Navbar/Navbar';
import Baner from './Components/Baner/Baner';


function App() {
  let banerData =[
         {text1:"Dive into", text2:"what you love"},
         {text1:"Indulgue", text2:"your passions"},
         {text1:"Give in to", text2:"your passions"},
        

  ]
  const [banerCount, setBanerCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

useEffect(() =>{
  setInterval(() =>{
    setBanerCount((count) => {return count===2?0:count+1})
  }, 5000);
},[])


  return (
    <div>
       <Background playStatus = {playStatus} banerCount={banerCount}/>
       <Navbar/>
       <Baner 
       setPlayStatus = {setBanerCount}
       banerData = {banerData[banerCount]}
       banerCount = {banerCount}
       setBanerCount = {setBanerCount}
       playStatus = {playStatus}
       />
    </div>
  )
}

export default App;
