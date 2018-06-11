// All References for the show Catalogue

var stockTemplate = document.querySelector('.stockTemplate').innerHTML; //template reference
var card = document.querySelector('.card'); // cart
var myStockDisplay = document.querySelector('.myStockDisplay'); //Display current stock

// input references
var brandAdd = document.querySelector('.brandAdd'); //brand to add
var colourAdd = document.querySelector('.colourAdd'); // colour of brand
var sizeAdd = document.querySelector('.sizeAdd'); // size of brand
var stockAdd = document.querySelector('.stockAdd'); // stock of the brand

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

var templateCompiler = Handlebars.compile(stockTemplate);

window.addEventListener('load', function(){
   compileMe(shoeApp.stockShoes());
});



function compileMe(listToCompile){
   var data = {
      stock_map : listToCompile
   }
   var compiled = templateCompiler(data);
   myStockDisplay.innerHTML = compiled;
}
