let text = document.querySelector("#text");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signUp = document.querySelector("#signup");

   signUp.addEventListener('click',function(e){
    e.preventDefault();
    if(text.value=== "" || email.value=== "" || password.value=== "" ){
     alert('error')
    
    }  else {
        localStorage.setItem('username',text.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);

    setTimeout( () => {
        window.location = "login.html"
    } , 1500)
        
        
    }
});



