let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let button = document.getElementById("button")

confirmPassword.addEventListener('input', function(event){
    
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Password does not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
})

password.addEventListener('input', function(event){
    
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Password does not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
})


