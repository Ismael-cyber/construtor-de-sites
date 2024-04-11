function validateForm(event) {
    "use strict";
    event.preventDefault();
    const form = document.getElementById("create-page");
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-valited");
        return false;
    }
    return submitForm();
}

function submitForm() {
    console.log("Get Form Content");
    const nameField = document.getElementById("name");
    const nameValue = nameField.value;
    console.log("nameValue :>> ", nameValue);
    axios.post('/pages', { name: nameValue }).then(response=> {
        if(response.status===200){
            alert(`Pagina ${nameValue} criada com sucesso`);
            window.location.href = '/';
        } else {
            alert("Algo de errado no servidor");
        }
    }).catch(err=> {
        console.log('err :>> ', err);
        alert("Erro Ocorrido");
    });
    clearForm();
    return true;
}

function clearForm() {
    // Quando o nome for colocado irá ser resetado 

    const nameField = document.getElementById("name");
    nameField.value = "";

    // Remover a mensagem "was valited" do formulário

    const form = document.getElementById("create-page");
    form.classList.remove("was-valited");
}