
let form = document.querySelector("#logForm")
let emailError = document.querySelector("#emailError");  
let passwordError = document.querySelector("#passwordError");
form.addEventListener("submit", function(event){
    
    let emailInput = document.querySelector("input.email");
    let passwordInput = document.querySelector("input.password")
    let emailList = [];
    let passwordList = [];
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(emailReg.test(emailInput.value));

    if(emailInput.value == ""){
        emailList.push("El email es obligatorio.");
    }else if(!emailReg.test(emailInput.value)){
        emailList.push("El email debe ser válido.");
    }
    if(passwordInput.value == ""){
        passwordList.push("La contraseña es obligatoria.");
    }
    
    if(emailList.length > 0){

        event.preventDefault();

        emailError.innerHTML = "";

        emailList.forEach( error =>{
            emailError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    };
    if(passwordList.length > 0){

        event.preventDefault();

        passwordError.innerHTML = "";

        passwordList.forEach( error =>{
            passwordError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }

})


