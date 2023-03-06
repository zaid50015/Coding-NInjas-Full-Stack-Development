let items=$("#items");
$("form").submit(function (e) { 
    e.preventDefault();
    let rollno=$("#roll").val();
    let studentName=$("#sname").val();
  let marks=$("#marks").val();
  let item=`<div class="items">Roll No- <span class="highlight">${rollno} </span>, Name is <span class="highlight">${studentName} </span>, has scored <span class="highlight">${marks} </span></div>`
  items.append(item);
  $("#roll").val("");
  $("#sname").val("");
  $("#marks").val("");
});