
let form = document.querySelector("#logForm")
let errorsUser = document.querySelector(".errors");  
form.addEventListener("submit", function(event){
    event.preventDefault();
      
    let emailInput = document.querySelector("input.email");
    let passwordInput = document.querySelector("input.password")
    let errorsList = [];
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(emailReg.test(emailInput.value));

    if(emailInput.value == ""){
        errorsList.push("El email es obligatorio.");
    }else if(!emailReg.test(emailInput.value)){
        errorsList.push("El email debe ser válido.");
    }
    if(passwordInput.value == ""){
        errorsList.push("La contraseña es obligatoria.");
    }
    
    if(errorsList.length > 0){

        event.preventDefault();

        errorsUser.innerHTML = "";

        errorsList.forEach( error =>{
            errorsUser.innerHTML += "<li>" + error + "<li>"
        })
        
        
    }

})
