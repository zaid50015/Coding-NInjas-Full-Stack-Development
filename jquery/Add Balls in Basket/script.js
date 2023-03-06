let colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
let le=colors.length;
console.log(le);
let container=$('#container')
let count=0
$("#button").click( ()=> { 
     let indx=Math.floor(Math.random()*le)
   container.append('<div class="box"></div>'); 
   $(".box").eq(count).css( "background",colors[indx]);
   count++;
   
});