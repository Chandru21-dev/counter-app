import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/navbar"
import Nxt from "./components/nxt"
import Adder from "./components/adder"

ReactDOM.render(
  <div>
<Navbar />
<Nxt />
<Adder />
<Adder />
<Adder />
<Adder />
  </div>
  ,
  document.getElementById('root')
);

