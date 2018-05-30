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
            brand : 'china teki',
            color : 'pink',
            size  : 4,
            in_stock : 5
         },
         {
            brand : 'amateki',
            color : 'white',
            size : 5,
            in_stock : 9
         }
      ];
      search.inStock(stock); //assign the list to the stock or map of the shoes
      it('brand : amateki color: black size :6', function(){
         assert.deepEqual(search.searchShoe('amateki', 'black', 6), [{brand : 'amateki',color : 'black',size : 6,in_stock : 15}]);
      });//search 1
      it('brand :adidas color :red size :8', function(){
         assert.deepEqual(search.searchShoe('adidas','red',8),[]);
      });//search 2
      it('brand :China teki color :pink size :4', function(){
         assert.deepEqual(search.searchShoe('chine teki','pink',4),[{brand : 'china teki',color : 'pink',size  : 4,in_stock : 5}]);
      });//search 3
   });//search for a shoe
   describe('Adding a new stock', function(){
      var addStock = ShoeCatalogue();
      it('Adding in empty stock', function(){
         var stock1 = [];
         addStock.inStock(stock1);
         addStock.addingStock('puma','silver',4,2); // adding the stock with the function with key addingStock takes in 4 parameters
         addStock.addingStock('jet','blue',4); // addingStock takes in 3 parameters (no stock)
         assert.equal(addStock.stockShoes(),
         [
            {brand : 'puma',
             color : silver,
             size : 4,
             in_stock : 2
            },
            {brand : 'jet',
             color: 'blue',
             size : 4,
             in_stock : 1
            }
         ]);
      });// adding 1
      it('Adding to a map containing stock', function(){
         var stock2 = [
            {
               brand : 'amateki',
               color : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               color : 'orange',
               size  : 5,
               in_stock : 9
            },
            {
               brand : 'amateki',
               color : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               color : 'purple',
               size  : 7,
               in_stock : 4
            }
         ];
         addStock.inStock(stock2);
         addStock.addingStock('puma','silver',4,2);
         addStock.addingStock('china teki','purple',7,10);
         addStock.addingStock('vovo','orange',5);
         assert.equal(addStock.stockShoes(),
         [
            {
               brand : 'amateki',
               color : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               color : 'orange',
               size  : 5,
               in_stock : 10
            },
            {
               brand : 'amateki',
               color : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               color : 'purple',
               size  : 7,
               in_stock : 14
            },
            {
               brand : 'puma',
               color : 'silver',
               size : 4,
               in_stock : 2
            }
         ]);
      });
   });//Adding a new stock
});//End of application test
