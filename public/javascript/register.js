

let form = document.querySelector("#regForm");
let nameError = document.querySelector("#nameError");
let lastNameError = document.querySelector("#lastNameError");
let emailError = document.querySelector("#emailError");  
let fileError = document.querySelector("#fileError");
let passwordError = document.querySelector("#passwordError");
form.addEventListener("submit", function(event){
    
    let nameInput = document.querySelector("input.name");
    let lastNameInput = document.querySelector("input.lastName");
    let emailInput = document.querySelector("input.email");
    let fileInput = document.querySelector("input.file");
    let passwordInput = document.querySelector("input.password");
    
    let nameList = [];
    let lastNameList = [];
    let emailList = [];
    let fileList = [];
    let passwordList = [];
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(emailReg.test(emailInput.value));
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.JPG|\.JPEG|\.PNG|\.GIF)$/i;

    if (nameInput.value == "") {
        nameList.push("El nombre es obligatorio.");
    } else if (nameInput.value.length < 2) {
        nameList.push("El nombre debe tener al menos 2 caracteres.");
    }
    if (lastNameInput.value == "") {
        lastNameList.push("El apellido es obligatorio.");
    } else if (lastNameInput.value.length < 2) {
        lastNameList.push("El apellido debe tener al menos 2 caracteres.");
    }
    if(emailInput.value == ""){
        emailList.push("El email es obligatorio.");
    }else if(!emailReg.test(emailInput.value)){
        emailList.push("El email debe ser válido.");
    }
    if(!fileInput.files[0]){
        fileList.push("Porfavor seleccione una imagen de perfil")
    }else if(!allowedExtensions.exec(fileInput.files[0].toLowerCase())){
        fileList.push("Porfavor seleccione un archivo de tipo JPG, JPEG, PNG o GIF.")
    }
    if(passwordInput.value == ""){
        passwordList.push("La contraseña es obligatoria.");
    }else if(passwordInput.value.length <8){
        passwordList.push("La contraseña debe tener almenos 8 caracteres.")
    }
    
    if(nameList.length > 0){

        event.preventDefault();

        nameError.innerHTML = "";

        nameList.forEach( error =>{
            nameError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }
    if(lastNameList.length > 0){

        event.preventDefault();

        lastNameError.innerHTML = "";

        lastNameList.forEach( error =>{
            lastNameError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }
    if(emailList.length > 0){

        event.preventDefault();

        emailError.innerHTML = "";

        emailList.forEach( error =>{
            emailError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }
    if(fileList.length > 0){

        event.preventDefault();

        fileError.innerHTML = "";

        fileList.forEach( error =>{
            fileError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }
    if(passwordList.length > 0){

        event.preventDefault();

        passwordError.innerHTML = "";

        passwordList.forEach( error =>{
            passwordError.innerHTML += "<li>" + error + "</li>"
        })
        
        
    }

})


