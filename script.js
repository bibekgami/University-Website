const form = document.querySelector("form"),
                nextbtn = form.querySelector(".nextbtn"),
                backbtn = form.querySelector(".backbtn"),
                allInput = form.querySelectorAll(".first input");

nextbtn.addEventListener("click" , ()=>{
    allInput.forEach(input=>{
        if(input.value !=""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive'); 

        }
    })
})

backbtn.addEventListener("click",() => form.classList.remove('secActive')); 