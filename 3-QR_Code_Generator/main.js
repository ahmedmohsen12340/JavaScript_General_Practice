let text = document.querySelector(`[type="text"]`);
let btn = document.querySelector(`[type="button"]`);
img = document.querySelector("img");
imgcon = document.querySelector(".imgContainer");

btn.addEventListener("click",()=>{
    if(text.value.length> 0){
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
        imgcon.classList.add("show");
    }
    else{
        text.classList.add("error");
        setTimeout(()=>{
            text.classList.remove("error");
        },1000)
    }
})
text.addEventListener("change",()=>{
    imgcon.classList.remove("show")
})