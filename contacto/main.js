let password = document.querySelector("#password")
let match = document.querySelector("#confirm")


match.addEventListener("input", checkPassword)

function checkPassword(event){
    if(password.value === match.value){
        match.setCustomValidity("");
    }
    else{
        match.setCustomValidity("Passwords do not match")
    }

}


password.addEventListener("input", () => {
    if(match.value != ""){
        match.setCustomValidity("Passwords do not match")
    }
})