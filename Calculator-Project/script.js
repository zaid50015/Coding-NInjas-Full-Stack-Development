// Fat arrow function do not have their own this they point to windows this

let items=document.querySelectorAll(".button");
let expression="";
let display=document.getElementById("display");
items.forEach((item)=>{
 
 item.addEventListener("click",function (){
     let value=this.getAttribute('data-value');
     if(value=="="){
        let ans=eval(expression);
        display.textContent=ans;
         expression=ans;
     }
     else if(value=="ac"){
        expression="";
        display.textContent="";
     }
     else{
        expression+=value;
        display.textContent=expression;
     }


 });
})

