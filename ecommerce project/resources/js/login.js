let text = document.querySelector("#text");
let password = document.querySelector("#password");
let signIn = document.querySelector("#signIn");
let getUser= localStorage.getItem('username');
let getPassword= localStorage.getItem('password');
signIn.addEventListener('click',function(e){
    e.preventDefault();
    if(text.value=== "" || password.value=== "" ){
     alert('error')
    
    }  else{
        if((getUser&&getUser.trim()==='lila') &&(getPassword&&getPassword.trim()==='123') )

        setTimeout( () => {
            window.location = "index.html"
        } , 1500)
    }
});
