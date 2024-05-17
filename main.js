let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () =>{
    cart.classList.add("active");
};

closeCart.onclick = () =>{
    cart.classList.remove("active");
};

/*checar si el carrito esta trabajando*/
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

/*funcion ready*/

function ready(){
    /*quitar items del carrito*/
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for(var i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
    
    /*Casteo del quantity*/
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i=0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

/*actualizar el precio*/

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i=0; i< cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];/*cambio*/
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        total = Math.round(total * 100) / 100;
        
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;/*cambio*/
    }
}





