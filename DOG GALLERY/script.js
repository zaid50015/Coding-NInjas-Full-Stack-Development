let breedSelect=$("#breed")
$.get("https://dog.ceo/api/breeds/list/all",
    function (data, textStatus) {
        let breeds=data.message
        for (const breed  in breeds) {
              breedSelect.append(`<option value="${breed}"> ${breed}</option>`);
        }
    },

);
breedSelect.change(function () { 
    console.log("fired");
    $('#dog-sub-breeds').remove();
    let breed=breedSelect.val();
     let url=`https://dog.ceo/api/breed/${breed}/list`;
  
     $.get(url, 
        function (data) {
            
            if(data.message.length!=0){
                let subBreed=data.message;
                let subBreedSelect=`<select id="dog-sub-breeds"></select>`;
                
                breedSelect.after(subBreedSelect);
                for (const breed in subBreed) {
                    console.log(subBreed[breed]);
                    $(`#dog-sub-breeds`).append(`<option value="${subBreed[breed]}"> ${subBreed[breed]}</option>`);
                 
                }
            }
        },
     
     );
});
$('form').submit(function (e) { 
    e.preventDefault();
    $("#breed-image img").remove();
    let breed=breedSelect.val();
    let subBreed=$('#dog-sub-breeds').val();
    let url=`https://dog.ceo/api/breed/${breed}`;
    if((subBreed!=undefined)){
        url+="/"+subBreed;
    }
    url+="/images"
    console.log(url);
    $.get(url, 
        function (data, textStatus, jqXHR) {
          let img=data.message;
          for (const src in img) {
            console.log(img[src]);
            $("#breed-image").append(`<img src="${img[src]}" alt="${img[src]}">`);
          }
          
        },
        
    );
});