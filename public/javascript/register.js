let form = document.querySelector("#regForm")
let errorsUser = document.querySelector(".errors");  
form.addEventListener("submit", function(event){
    event.preventDefault();
    

    let nameInput = document.querySelector("input.name");
    let lastNameInput = document.querySelector("input.lastName");
    let emailInput = document.querySelector("input.email");
    let fileInput = document.querySelector("input.file");
    let passwordInput = document.querySelector("input.password");
    
    let errorsList = [];
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(emailReg.test(emailInput.value));
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (nameInput.value == "") {
        errorsList.push("El nombre es obligatorio.");
    } else if (nameInput.value.length < 2) {
        errorsList.push("El nombre debe tener al menos 2 caracteres.");
    }
    if (lastNameInput.value == "") {
        errorsList.push("El apellido es obligatorio.");
    } else if (lastNameInput.value.length < 2) {
        errorsList.push("El apellido debe tener al menos 2 caracteres.");
    }
    if(emailInput.value == ""){
        errorsList.push("El email es obligatorio.");
    }else if(!emailReg.test(emailInput.value)){
        errorsList.push("El email debe ser válido.");
    }
    if(!fileInput.files[0]){
        errorsList.push("Porfavor seleccione una imagen de perfil")
    }else if(!allowedExtensions.exec(fileInput.files[0])){
        errorsList.push("Porfavor seleccione un archivo de tipo JPG, JPEG, PNG o GIF.")
    }
    if(passwordInput.value == ""){
        errorsList.push("La contraseña es obligatoria.");
    }else if(passwordInput.value.length <8){
        errorsList.push("La contraseña debe tener almenos 8 caracteres.")
    }
    
    if(errorsList.length > 0){

        event.preventDefault();

        errorsUser.innerHTML = "";

        errorsList.forEach( error =>{
            errorsUser.innerHTML += "<li>" + error + "<li>"
        })
        
        
    }

})


