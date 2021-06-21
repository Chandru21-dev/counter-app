import React ,{ useState } from "react"
import Adder from "./adder"
import Navbar from "./navbar"


function Inter(props){
let v=1;

    const [items,setItems] =useState([<Adder  key={0}  id={0} Test={test} se={send} />])

    const[va, setV]=useState("")
    
        function test(ind){
            setItems(prev => {
                return prev.filter((val,index) =>{
                    return ind!==index
                })
            })
        }

    let i=0;


let k=0;

    function send(value){
        if (value==="yes" && i===0 ){
               setV("yes");
                i++;
        }else if (value==="no" ) {
           setV("no");
        }else if(value==="zero"&& Math.floor(k/2)%2!==k/2){
            k++;
            setV("zero")
        }else if (value==="zero" && Math.floor(k/2)===k/2){
            setV("close")
            k--;
            
        }
   
    }
    
    


    function increase(){
        setItems((prev) =>{
        return [...prev, <Adder 
            key={items.length}
            id={items.length}
            Test={test}
            se={send}
        />]
       } )
    }



   

    return <div>
    {items.map((val)=> {
return [<h4 class="position-absolute no">{v++}</h4>,val, props.m(va)  ]})}

      <button class><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></button> 

       <div class="position-absolute set plus"><button onClick={increase} class="btn btn-dark"><span class="glyphicon glyphicon-plus"></span>Add</button></div>
       
    </div>
}
export default Inter