var toggleMode=()=>{
    if(toggle){
        innerDiv.style.marginLeft="80%"
        bod.classList.add("bg-black");
        heading.classList.add("text-color");
        toggle=false;
    }
  else{
    innerDiv.style.marginLeft="1px"
    bod.classList.remove(`bg-black`);
    heading.classList.remove(`text-color`);
    toggle=true;
  }
   
}

let toggle =true;
let heading=document.getElementsByTagName(`h1`)[0];
let bod=document.getElementsByTagName('body')[0];
let outerDiv=document.getElementById(`outer-div`);
let innerDiv=document.getElementById(`inner-div`);
outerDiv.addEventListener("click", toggleMode);

