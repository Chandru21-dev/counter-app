import React,{ useState} from "react"



function Adder(){
    var st="zero"

    const [count, setCount]= useState(st)

    function increase(){
        setCount(count==="zero" ? st=1 : count + 1)
    }

    function decrease(){
        setCount(count>1 ? count -1 : st="zero")
    }


    return <div class="bottom">
        <h3 class="position-fixed t"><span class="badge text-dark badge-warning">{count}</span></h3>
        <div class="position-relative set p" ><button onClick={increase} class="btn btn-secondary"><span class="glyphicon glyphicon-plus"></span>+</button></div>
        <div class="position-relative set m"><button onClick={decrease} class="btn btn-success"><span class="glyphicon glyphicon-plus"></span>-</button></div>
        <div class="position-relative set d"><button class="btn btn-danger"><span class="glyphicon glyphicon-plus"></span>Delete</button></div>
    </div>
}

export default Adder