var site_Name = document.getElementById("bookName")
var site_URL= document.getElementById("bookURL")
var submitBtn = document.getElementById("submitBtn");

console.log( site_Name, site_URL);


var bookmark=[];

function addbookmark(){
    
    // var Regex = /^https?:\/\//g;
  
    
    var book={
        name:site_Name.value,
        url: site_URL.value
    }
    bookmark.push(book)
    console.log(bookmark);
    displaybook();
    clearbook();
}

function displaybook(){
    var html_content='';
    for(var i = 0; i < bookmark.length; i++ ){
        html_content +=
        `  <tr>
            <td>${i+1}</td>
            <td>${bookmark[i].name}</td>              
            <td>
            <button class="btn  btn-success" data-index="0" >
                <a href="${bookmark[i].url}" style="color: inherit; text-decoration: none;"> <i class="fa-solid fa-eye pe-2"></i>Visit</a>
            </button>
            </td>
            <td>
            <button class="btn btn pe-2 btn-danger" data-index="0" onclick="deletebook(${i})" >
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
            </td>
            </tr>
        `
    }
    document.getElementById('tableContent').innerHTML= html_content;

}

function clearbook(){
    site_Name.value=""
    site_URL.value="";
}
function deletebook(idx){
    bookmark.splice(idx,1);
    displaybook();
}


















