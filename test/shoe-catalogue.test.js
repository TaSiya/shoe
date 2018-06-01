describe('Shoe Catalogue application Tests', function(){
   describe('Adding to a stock', function(){
      var addStock = ShoeCatalogue();
      it('Adding in empty stock', function(){
         var stock1 = [];
         addStock.inStock(stock1);
         addStock.addingStock('puma','silver', 4, 2); // adding the stock with the function with key addingStock takes in 4 parameters
         addStock.addingStock('jet','blue',4); // addingStock takes in 3 parameters (no stock)
         assert.deepEqual(addStock.stockShoes(),
         [
            {brand : 'puma',
             colour : 'silver',
             size : 4,
             in_stock : 2
            },
            {brand : 'jet',
             colour: 'blue',
             size : 4,
             in_stock : 1
            }
         ]);
      });// adding 1
      it('Adding to a map containing stock', function(){
         var stock2 = [
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               colour : 'orange',
               size  : 5,
               in_stock : 9
            },
            {
               brand : 'amateki',
               colour : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 4
            }
         ];
         addStock.inStock(stock2);
         addStock.addingStock('puma','silver',4,2);
         addStock.addingStock('china teki','purple',7,10);
         addStock.addingStock('vovo','orange',5);
         assert.deepEqual(addStock.stockShoes(),
         [
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               colour : 'orange',
               size  : 5,
               in_stock : 10
            },
            {
               brand : 'amateki',
               colour : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 14
            },
            {
               brand : 'puma',
               colour : 'silver',
               size : 4,
               in_stock : 2
            }
         ]);
      });
   });//Adding a new stock
   describe('Add all total stock shoes with (NAME)',function(){
      var total = ShoeCatalogue();
      var stock4 = [
         {
            brand : 'amateki',
            colour : 'red',
            size  : 6,
            in_stock : 5
         },
         {
            brand : 'vovo',
            colour : 'orange',
            size  : 5,
            in_stock : 9
         },
         {
            brand : 'amateki',
            colour : 'white',
            size  : 4,
            in_stock : 13
         },
         {
            brand : 'china teki',
            colour : 'purple',
            size  : 7,
            in_stock : 4
         },
         {
            brand : 'china teki',
            colour : 'yellow',
            size  : 5,
            in_stock : 8
         },
         {
            brand : 'amateki',
            colour : 'black',
            size  : 4,
            in_stock : 7
         }
      ];
      total.inStock(stock4);
      it('Total stock for (amateki)', function(){
         assert.deepEqual(total.totalStock('amateki'),25);
      });// total 1
      it('Total stock for (amateki)', function(){
         assert.deepEqual(total.totalStock('china teki'),12);
      });// total 2
      it('Total stock for (amateki)', function(){
         assert.deepEqual(total.totalStock('vovo'),9);
      });// total 3
   });//Add all total stock shoes with (NAME)
   describe('search for all shoe with (NAME)', function(){
      var search2 = ShoeCatalogue();
      var stock3 = [
         {
            brand : 'amateki',
            colour : 'red',
            size  : 6,
            in_stock : 5
         },
         {
            brand : 'vovo',
            colour : 'orange',
            size  : 5,
            in_stock : 9
         },
         {
            brand : 'amateki',
            colour : 'white',
            size  : 4,
            in_stock : 13
         },
         {
            brand : 'china teki',
            colour : 'purple',
            size  : 7,
            in_stock : 4
         },
         {
            brand : 'china teki',
            colour : 'yellow',
            size  : 5,
            in_stock : 8
         },
         {
            brand : 'amateki',
            colour : 'black',
            size  : 4,
            in_stock : 7
         }
      ];
      search2.inStock(stock3);
      it('search for all (amateki) shoe', function(){
         assert.deepEqual(search2.searchAll('amateki'),
            [
               {
                  brand : 'amateki',
                  colour : 'red',
                  size  : 6,
                  in_stock : 5
               },
               {
                  brand : 'amateki',
                  colour : 'white',
                  size  : 4,
                  in_stock : 13
               },
               {
                  brand : 'amateki',
                  colour : 'black',
                  size  : 4,
                  in_stock : 7
               }
            ]
         );
      });//search 2.1
      it('search for all puma', function(){
         assert.deepEqual(search2.searchAll('puma'),[]);
      });// search 2.2
      it('search for all puma', function(){
         assert.deepEqual(search2.searchAll('china teki'),
         [
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 4
            },
            {
               brand : 'china teki',
               colour : 'yellow',
               size  : 5,
               in_stock : 8
            }
         ]);
      });// search 2.3
   });//search for all shoe with (NAME)
   describe('search for a single stock shoe', function(){
      var search = ShoeCatalogue();
      var stock = [
         {
            brand : 'vovo',
            colour : 'white',
            size : 4,
            in_stock : 8
         },
         {
            brand : 'amateki',
            colour : 'black',
            size : 6,
            in_stock : 15
         },
         {
            brand : 'china teki',
            colour : 'pink',
            size  : 4,
            in_stock : 5
         },
         {
            brand : 'amateki',
            colour : 'white',
            size : 5,
            in_stock : 9
         }
      ];
      search.inStock(stock); //assign the list to the stock or map of the shoes
      it('brand : amateki colour: black size :6', function(){
         assert.deepEqual(search.searchShoe('amateki', 'black', 6), {brand : 'amateki',colour : 'black',size : 6,in_stock : 15});
      });//search 1
      it('brand :adidas colour :red size :8', function(){
         assert.deepEqual(search.searchShoe('adidas','red',8),{});
      });//search 2
      it('brand :China teki colour :pink size :4', function(){
         assert.deepEqual(search.searchShoe('china teki','pink',4),{brand : 'china teki',colour : 'pink',size  : 4,in_stock : 5});
      });//search 3
   });//search for a shoe
   describe('ordering from the stock', function(){
      var order = ShoeCatalogue();
      var stock4 = [
         {
            brand : 'amateki',
            colour : 'red',
            size  : 6,
            in_stock : 5
         },
         {
            brand : 'vovo',
            colour : 'orange',
            size  : 5,
            in_stock : 9
         },
         {
            brand : 'amateki',
            colour : 'white',
            size  : 4,
            in_stock : 13
         },
         {
            brand : 'china teki',
            colour : 'purple',
            size  : 7,
            in_stock : 4
         },
         {
            brand : 'china teki',
            colour : 'yellow',
            size  : 5,
            in_stock : 8
         },
         {
            brand : 'amateki',
            colour : 'black',
            size  : 4,
            in_stock : 7
         }
      ];
      order.inStock(stock4);
      it('order two amateki', function(){
         order.makeOrder('amateki','red',6);
         order.makeOrder('amateki','black',4);
         assert.deepEqual(order.stockShoes(),
         [
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
               in_stock : 4
            },
            {
               brand : 'vovo',
               colour : 'orange',
               size  : 5,
               in_stock : 9
            },
            {
               brand : 'amateki',
               colour : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 4
            },
            {
               brand : 'china teki',
               colour : 'yellow',
               size  : 5,
               in_stock : 8
            },
            {
               brand : 'amateki',
               colour : 'black',
               size  : 4,
               in_stock : 6
            }
         ]
         );
      });//order 1
   });//ordering from the stock
   describe('cancelling order made', function(){
      it('cancel amateki', function(){
         var check = ShoeCatalogue();
         var stock5 = [
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               colour : 'orange',
               size  : 5,
               in_stock : 9
            },
            {
               brand : 'amateki',
               colour : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 4
            },
            {
               brand : 'china teki',
               colour : 'yellow',
               size  : 5,
               in_stock : 8
            },
            {
               brand : 'amateki',
               colour : 'black',
               size  : 4,
               in_stock : 7
            }
         ];
         check.inStock(stock5);
         check.makeOrder('amateki', 'red',6);
         check.makeOrder('china teki', 'yellow',5);
         check.makeOrder('amateki', 'red',6);
         check.makeOrder('china teki', 'yellow',5);
         check.cancelOrder(1);
         assert.deepEqual(check.inBasket(),[
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
            },
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
            },
            {
               brand : 'china teki',
               colour : 'yellow',
               size  : 5,
            }
         ]);
      });

      it('cancel amateki', function(){
         var check2 = ShoeCatalogue();
         var stock502 = [
            {
               brand : 'amateki',
               colour : 'red',
               size  : 6,
               in_stock : 5
            },
            {
               brand : 'vovo',
               colour : 'orange',
               size  : 5,
               in_stock : 9
            },
            {
               brand : 'amateki',
               colour : 'white',
               size  : 4,
               in_stock : 13
            },
            {
               brand : 'china teki',
               colour : 'purple',
               size  : 7,
               in_stock : 4
            },
            {
               brand : 'china teki',
               colour : 'yellow',
               size  : 5,
               in_stock : 8
            },
            {
               brand : 'amateki',
               colour : 'black',
               size  : 4,
               in_stock : 7
            }
         ];
         check2.inStock(stock502);
         check2.makeOrder('amateki', 'red',6);
         check2.cancelOrder(0);
         assert.deepEqual(check2.inBasket(),[]);
      });
   });
   describe('checking out', function(){
      var checkOut = ShoeCatalogue();
      var stock6 = [
         {
            brand : 'amateki',
            colour : 'red',
            size  : 6,
            in_stock : 5
         },
         {
            brand : 'vovo',
            colour : 'orange',
            size  : 5,
            in_stock : 9
         },
         {
            brand : 'amateki',
            colour : 'white',
            size  : 4,
            in_stock : 13
         },
         {
            brand : 'china teki',
            colour : 'purple',
            size  : 7,
            in_stock : 4
         },
         {
            brand : 'china teki',
            colour : 'yellow',
            size  : 5,
            in_stock : 8
         },
         {
            brand : 'amateki',
            colour : 'black',
            size  : 4,
            in_stock : 7
         }
      ];
      checkOut.inStock(stock6);
      it('checking out test 1', function(){
         checkOut.makeOrder('amateki','black',4);
         checkOut.makeOrder('china teki','purple',7);
         checkOut.makeOrder('amateki','black',4);
         checkOut.makeOrder('vovo','orange',5);
         checkOut.cancelAll();
         assert.deepEqual(checkOut.inBasket(), []);
      });
      it('checking out test 1', function(){
         checkOut.cancelAll();
         assert.deepEqual(checkOut.inBasket(), []);
      });
   });
});//End of application test
