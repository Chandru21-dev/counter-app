import React,{ useState} from "react"



function Adder(props){
    var st="zero";
    var val;

    const [count, setCount]= useState(st)

    function increase(){
        setCount(count==="zero" ? st=1 : count + 1)
        
    }

    var mar=1;
    function decrease(){
        setCount(count>1 ? count -1 : st="zero")
       
    }
    
    count===1 ? props.se("yes") :count>1?props.se("no"):props.se("zero")
        


    return <div>
    <div class="bottom">
       
        <h3  class="position-absolute t">{count==="zero" ?<span  class="badge text-dark badge-warning">zero</span>: <span  class="badge text-dark badge-primary">{count}</span>}</h3>
        <div class="position-relative set p" ><button onClick={increase} class="btn btn-secondary"><span class="glyphicon glyphicon-plus"></span>+</button></div>
        <div class="position-relative set m"><button onClick={decrease} class="btn btn-success"><span class="glyphicon glyphicon-plus"></span>-</button></div>
        <div class="position-relative set d"><button  onClick={() => props.Test(props.id)} class="btn btn-danger"><span class="glyphicon glyphicon-plus"></span>Delete</button></div>
    </div>
    </div>
}

export default Adder