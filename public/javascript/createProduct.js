let form = document.querySelector(".myForm")

form.addEventListener("submit",function (event) {
    let errors = [];


    let nameInput = document.querySelector("input[name='productName']");
    
    if (nameInput.value === "") {
        errors.push("Debes escribir un Nombre para el producto")
    }else if (nameInput.value.length <5) {
        errors.push("El producto debe tener mas de 5 caracteres")
    }


    let descriptionInput = document.querySelector("textarea[name='description']");
    if (descriptionInput.value === "") {
        errors.push("Debes escribir una descripcion para el producto")
    }else if (descriptionInput.value.length <=19) {
        
        errors.push("La descripcion debe contener por lo menos 20 caracteres")
    }


    let category = document.querySelector("select[name='category']");
    if (category.value === "") {
        errors.push("Escoge una categoria")
        
    }

    let size = document.querySelector("select[name='size']");
    if (size.value === "") {
        errors.push("Escoge un tamaño")
        
    }


    let priceInput = document.querySelector("input[name='price']");
    if (priceInput.value === "") {
        errors.push("Escribe un precio valido")
    
    }
    if (errors.length > 0) {
        event.preventDefault();
        let errorDiv = document.querySelector("div.errors ul")
        let imgwarning = document.querySelector("img.warning")
        imgwarning.classList.add("display")

        errorDiv.innerHTML = "" 

        errors.forEach(error => {
            errorDiv.innerHTML += "<li>" +error+"</li>"
        });
        
    }else{
        let imgwarning = document.querySelector("img.warning")
        imgwarning.classList.remove("display")
    }
})
