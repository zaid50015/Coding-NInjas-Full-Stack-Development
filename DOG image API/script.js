let select=$('#breed');
let submit=true;
let breedImageContainer=$('#breed-image');
let breedvalue=undefined
$.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/list/all",
    success: function (response) {
        let breeds=response.message;
        // console.log(breeds);
        for (const breed in breeds) {
            if(Array.isArray(breed)){
                console.log("yes");
            }
            select.append(`<option value="${breed}">${breed}</option>`);
        }
    }
});
select.change(function (e) { 
    e.preventDefault();
    submit=true;
    console.log("fired");
    
});
$("form").submit(function (e) { 
    e.preventDefault();
    if(submit==true){
        submit=false;
        breedvalue=select.val();
        console.log(breedvalue);
       displayDogBreed(breedvalue);
    }
});
$("#next").click(function (e) { 
    e.preventDefault();
    if(breedvalue!=undefined){
        displayDogBreed(breedvalue);
    }else{
        alert("Please select a breed")
    }
    
});
let displayDogBreed=(breed)=>{
  let url=`https://dog.ceo/api/breed/${breed}/images/random`;
  $("#breed-image img").remove();
  $.get(url, function (data, status) {
    let imageUrl = data.message;
    breedImageContainer.append(`<img src="${imageUrl}"</img>`);
});
}