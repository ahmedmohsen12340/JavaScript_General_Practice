let inputBox = document.querySelector(".inputbox")
let input = document.querySelector(".input");
let message = document.querySelector(".message");
let strength = document.querySelector(".strength");

input.addEventListener("input",function(){
    if(input.value.length > 0)
    {
        message.style.display = "block"
    }
    if(input.value.length < 4){
        strength.innerHTML="Weak";
        inputBox.style.borderColor = "#ff00006e";
        message.style.color = "#ff00006e";
    }else if(input.value.length >4 && input.value.length <8){
        strength.innerHTML="Medium";
        inputBox.style.borderColor = "#ffff006e";
        message.style.color = "#ffff006e";
    }else if(input.value.length >8){
        strength.innerHTML="strong";
        inputBox.style.borderColor = "#00ff006e";
        message.style.color = "#00ff006e";
    }
})