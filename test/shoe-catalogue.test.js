describe('Shoe Catalogue application Tests', function(){
   describe('search for a shoe', function(){
      var search = ShoeCatalogue();
      var stock = [
         {
            brand : 'vovo',
            color : 'white',
            size : 4,
            in_stock : 8
         },
         {
            brand : 'amateki',
            color : 'black',
            size : 6,
            in_stock : 15
         },
         {
            brand : 'China teki',
            color : 'pink',
            size  : 4,
            in_stock : 5
         }

      search.inStock(stock); //assign the list to the stock or map of the shoes
      it('brand : amateki color: black size :6', function(){
         assert.deepEqual(search.searchShoe('amateki', 'black', 6), [{brand : 'amateki',color : 'black',size : 6,in_stock : 15}]);
      });//search 1
      it('band :adidas color :red size :8', function(){
         assert.deepEqual(search.searchShoe('adidas','red',8),[]);
      });//search 2
   });//search for a shoe
});//End of application test
