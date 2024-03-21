//step 1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){

    //step 2: get the email address
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    //step 3: get the password address
   const passwordField = document.getElementById("user-password");
   const password = passwordField.value;

   //step 4: Danger Varify email and password
    if(email === 'aknkhan2000@gmail.com' && password === 'nishan2000'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid User");
    }

})