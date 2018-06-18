// All References for the show Catalogue

var cartTemplate = document.querySelector('.cartTemplate').innerHTML; //template reference
var stockTemplate = document.querySelector('.stockTemplate').innerHTML;
var myStockDisplay = document.querySelector('.myStockDisplay'); //Display current stock
var displayCart = document.querySelector('.displayCart'); // Display the cart

// input references
var brandAdd = document.querySelector('.brandAdd'); //brand to add
var colourAdd = document.querySelector('.colourAdd'); // colour of brand
var sizeAdd = document.querySelector('.sizeAdd'); // size of brand
var stockAdd = document.querySelector('.stockAdd'); // stock of the brand
var displayTotal = document.querySelector('.displayTotal'); // Display total in basket

var addToStockBtn = document.querySelector('.addToStockBtn'); //adding the brand to the stock

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

document.addEventListener('DOMContentLoaded', function(){


   compileCart(shoeApp.inBasket());
   compileMe(shoeApp.stockShoes());
});

function compileMe(listToCompile){
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
