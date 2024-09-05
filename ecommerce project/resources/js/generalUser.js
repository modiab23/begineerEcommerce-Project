let links = document.querySelector('#links');
let userInfo = document.querySelector('#user-info');
let user = document.querySelector('#user');
let logOut = document.querySelector('#logout');
let username = localStorage.getItem('username')
if (username) {
    links.remove();
    userInfo.style.display= "flex";
    user.innerHTML = username;
}
logOut.addEventListener('click',function(){
    localStorage.clear();
   setTimeout(() => {
    window.location=  'register.html'
   }, 1500);

});