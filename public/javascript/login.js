
let form = document.querySelector("#logForm")
let emailError = document.querySelector("#emailError");  
let passwordError = document.querySelector("#passwordError");
form.addEventListener("submit", function(event){
    event.preventDefault();
      
    let emailInput = document.querySelector("input.email");
    let passwordInput = document.querySelector("input.password")
    let errorsEmail = [];
    let errorsPassword = []
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(emailReg.test(emailInput.value));

    if(emailInput.value == ""){
        errorsEmail.push("El email es obligatorio.");
    }else if(!emailReg.test(emailInput.value)){
        errorsEmail.push("El email debe ser válido.");
    }
    if(passwordInput.value == ""){
        errorsPassword.push("La contraseña es obligatoria.");
    }
    
    if(errorsEmail.length > 0){

        event.preventDefault();

        emailError.innerHTML = "";

        errorsEmail.forEach( error =>{
            emailError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    };
    if(errorsPassword.length > 0){

        event.preventDefault();

        passwordError.innerHTML = "";

        errorsPassword.forEach( error =>{
            passwordError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }

})


