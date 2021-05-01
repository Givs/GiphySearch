function inputValue(){
    var input = document.querySelector("input").value;
    document.querySelector("input").value = "";
    console.log(input);
    clean();
    api(input);
   
}

// event with ENTER 
const input = document.querySelector("input");
input.addEventListener('keyup', enter);

function enter(e){
    var input = document.querySelector("input").value;

    if (e.which === 13){
        clean();
        api(input);
        document.querySelector("input").value = "";
    }  

   
}

function api(input){
     //using AJAX 
     var url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=V5BIVJ629QTkNQdI61keeJYOmHYFquVD`;

     var GiphyAjaxCall = new XMLHttpRequest();
     GiphyAjaxCall.open('GET', url);
     GiphyAjaxCall.send();
 
     GiphyAjaxCall.addEventListener('load', (e) => {
         var data = e.target.response;
         pushToDom(data);
     });
}


function clean(){
    var container = document.querySelector(".js-container");
    container.innerHTML = '';
}


function pushToDom(data){
    var response = JSON.parse(data);
    var imgURL = response.data;
    imgURL.forEach((image) => {
        var url = image.images.fixed_height.url;
        var container = document.querySelector(".js-container");
        container.innerHTML += `<img src='${url}' class='container-image'/>`
    })

    
}