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
//  products
let productDom = document.querySelector(".products");
let productCart= document.querySelector(".product-cart div");
let productCartMenu= document.querySelector(".product-cart");
let badgeDom = document.querySelector('.badge');
let shoppingProduct = document.querySelector("#shopping-Product")
let product = [
    {
        id: 1,
        title: 'germany chair',
        size: 'large',
        imgUrl:'resources/image/category-banner1.jpg'
    },
    {
        id: 2,
        title: 'italy chair',
        size: 'medium',
        imgUrl:'resources/image/category-banner2.jpg'
    },
    {
        id: 3,
        title: 'france chair',
        size: 'small',
        imgUrl:'resources/image/chair1.jpg'
    },
    {
        id: 4,
        title: 'england chair',
        size: 'medium',
        imgUrl:'resources/image/chair2.jpg'
    }
];
function productsDrawUi() {
  let productUi = product.map(function(item){
     return`
    
     <div class="product-item">
            <img src="${item.imgUrl}">
            <div class="home-des">
                <h2>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet</p>
                <span>size:${item.size}</span>
            </div>
            <div class="home-cart">
                <a href="#" id = 'addCart' onclick= "addedToCard( ${item.id} )" ><button>add cart </button></a>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
       </div>        
    </div> ` ;

    }) ;  
    productDom.innerHTML = productUi;
};
productsDrawUi();

let addCart= document.querySelector('#addCart');
let addedItem = localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')) :[];
if(addedItem){
   addedItem.map( (item)=> {
    productCart.innerHTML+=`<p>${item.title}</p>`
   }); 
   badgeDom.style.display = "block"
   badgeDom.innerHTML += addedItem.length;
}  
function addedToCard (id){
    if(localStorage.getItem('username') ){
        console.log('added To Cart')
        }else{     
               window.location = 'login.html'
             }; 
    let chosenItem =  product.find((item) => item.id===id)
    productCart.innerHTML += `<p>${chosenItem.title}</p>`
    addedItem = [...addedItem,chosenItem]
    localStorage.setItem('productsInCart',JSON.stringify(addedItem))
    let cartProductItem = document.querySelectorAll(".product-cart div p");

    badgeDom.style.display = "block"
    badgeDom.innerHTML = cartProductItem.length;
};

shoppingProduct.addEventListener("click",shoppingOpen);
   function shoppingOpen(){
    if(productCart.innerHTML != ""){
        if(productCartMenu.style.display == "block"){
            productCartMenu.style.display = 'none'
        }else{
        productCartMenu.style.display = 'block'
    };

 };
  
};
