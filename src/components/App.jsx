import React,{ StrictMode, useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar"
import Nxt from "./nxt"
import Inter from "./inter"
import Adder from "./adder"


function App(){
    
const[x ,setX]=useState("")

function now(n){
    setX(n)
}

  return <div>
<Navbar  ne={x} />
<Nxt />
<Inter  m={now} />

  </div>
}
 

export default App