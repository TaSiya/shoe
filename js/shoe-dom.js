// All References for the show Catalogue

var cartTemplate = document.querySelector('.cartTemplate').innerHTML; //cart template
var stockTemplate = document.querySelector('.stockTemplate').innerHTML; // stock template
var searchTemplate = document.querySelector('.searchTemplate').innerHTML; // search template

var myStockDisplay = document.querySelector('.myStockDisplay'); //Display current stock
var displayCart = document.querySelector('.displayCart'); // Display the cart
var itemsCount = document.querySelector(".itemsCount"); // display the number of items in the cart

// input references
var brandAdd = document.querySelector('.brandAdd'); //brand to add
var colourAdd = document.querySelector('.colourAdd'); // colour of brand
var sizeAdd = document.querySelector('.sizeAdd'); // size of brand
var stockAdd = document.querySelector('.stockAdd'); // stock of the brand
var displayTotal = document.querySelector('.displayTotal'); // Display total in basket

var addToStockBtn = document.querySelector('.addToStockBtn'); //adding the brand to the stock
var clearCart = document.querySelector('.clearCart'); // clearig the whole cart
var remove = document.querySelector('.remove'); // remove item from the cart

var brandSearch = document.querySelector('.brandToSearch'); // brand to search
var colourSearch = document.querySelector('.colourSearch'); // colour of brand to search
var sizeSearch = document.querySelector('.sizeSearch'); // size of brand to search

var searchShoeBtn = document.querySelector('.searchShoeBtn'); // search button to search for the brand

//Getting data from the local storage
var storedStock = localStorage.getItem('shoes') ? JSON.parse(localStorage.getItem('shoes')) : [];
var storedBasket = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// Instance if the factory function
var shoeApp = ShoeCatalogue(storedStock,storedBasket);

var templateCompiler = Handlebars.compile(cartTemplate);
var templateCompilerStock = Handlebars.compile(stockTemplate);

document.addEventListener('DOMContentLoaded', displayScreen);



function displayScreen(){
  compileCart(shoeApp.inBasket());
  compileStock(shoeApp.stockShoes());
  itemsCount.innerHTML = shoeApp.cartItems();
}

function compileStock(listToCompile){
   var data = {
      stock_map : listToCompile
   }
   var compiled = templateCompilerStock(data);
   myStockDisplay.innerHTML = compiled;
}

function compileCart(listToCompile){
   var data = {
      cart_map : listToCompile
   }
   var compiled = templateCompiler(data);
   displayCart.innerHTML = compiled;
   displayTotal.innerHTML = "R  "+shoeApp.totalPrice();
}
