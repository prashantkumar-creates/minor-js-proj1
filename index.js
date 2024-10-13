var tochange = document.querySelector('h4');

let addbtn = document.querySelector('#add');
let rembtn = document.querySelector("#remove")


addbtn.addEventListener("click" ,function(){
   
  let isfreind =   tochange.innerHTML ;
  if(isfreind !== "friend"){
    tochange.innerText = "friend"
    addbtn.style.background = "black"
    addbtn.style.cursor = "auto"
    addbtn.disabled = true;
    
  }
})


rembtn.addEventListener("click",function(){
    let isfreind = tochange.innerText;
    if(isfreind == "friend"){
        tochange.innerText = "Not friend"
        addbtn.style.background = "green"
        addbtn.disabled = false;
        addbtn.style.cursor = "pointer"
    }else{
        
    }
})



