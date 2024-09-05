let productInCart =  localStorage.getItem('productsInCart');
let productDom = document.querySelector(".products");

if(productInCart){
  let item = JSON.parse(productInCart);

  drawCardProductUI(item);
}

function drawCardProductUI(product) {
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
                  <a href="#" id = 'addCart' onclick= "removeCard( ${item.id} )" ><button>remove card</button></a>
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
         </div>        
      </div> ` ;
  
      }) ;  
      productDom.innerHTML = productUi;
  };