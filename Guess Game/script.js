let curr="square";
let shapes=["square","rectangle","circle","oval","triangle-down","triangle-up","right-angle-triangle-left","right-angle-triangle"];
let color = ["red", "orange", "green", "maroon", "pink", "violet"];
let changeShape=document.getElementById("shape");
let changeColor=document.getElementById(`color`);
let box=document.getElementById(`block`);
changeShape.addEventListener(`click`,()=>{
    let len =shapes.length;
    
    let random=Math.floor(Math.random()*len);
    let randomShape=shapes[random];
    document.getElementById(curr).setAttribute(`id`,randomShape);
    curr=randomShape;
});

changeColor.addEventListener(`click`,()=>{
    let len =color.length;
     let randomColor=color[Math.floor(Math.random()*len)];
 box.style.backgroundColor=randomColor;

});