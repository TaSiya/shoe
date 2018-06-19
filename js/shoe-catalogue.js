function ShoeCatalogue(storedMa, storedBas){
                        //Global variables
   var stock_map =[
      {
         brand : 'amateki',
         colour : 'white',
         size : 6,
         new_price : 400,
         old_price : 550,
         in_stock : 7
      },
      {
         brand : 'vovo',
         colour : 'gold',
         size : 3,
         new_price : 200,
         old_price : 350,
         in_stock : 5
      },
      {
         brand : 'china teki',
         colour : 'yellow',
         size : 5,
         new_price : 250,
         old_price : 450,
         in_stock : 10
      },
      {
         brand : 'amateki',
         colour : 'black',
         size : 6,
         new_price : 400,
         old_price : 550,
         in_stock : 15
      },
      {
         brand : 'amateki',
         colour : 'red',
         size : 6,
         new_price : 400,
         old_price : 550,
         in_stock : 10
      },
      {
         brand : 'vovo',
         colour : 'pink',
         size : 7,
         new_price : 200,
         old_price : 350,
         in_stock : 4
      },
      {
         brand : 'china teki',
         colour : 'red',
         size : 5,
         new_price : 250,
         old_price : 450,
         in_stock : 4
      },
      {
         brand : 'phuma',
         colour : 'red',
         size : 6,
         new_price : 520,
         old_price : 700,
         in_stock : 8
      },
      {
         brand : 'originelz',
         colour : 'pink',
         size : 6,
         new_price : 320,
         old_price : 410,
         in_stock : 7
      },
      {
         brand : 'originelz',
         colour : 'black',
         size : 4,
         new_price : 320,
         old_price : 410,
         in_stock : 12
      },
      {
         brand : 'phuma',
         colour : 'white',
         size : 6,
         new_price : 520,
         old_price : 700,
         in_stock : 10
      },
      {
         brand : 'originelz',
         colour : 'blue',
         size : 5,
         new_price : 320,
         old_price : 410,
         in_stock : 9
      },
      {
         brand : 'amateki',
         colour : 'blue',
         size : 6,
         new_price : 400,
         old_price : 550,
         in_stock : 13
      },
      {
         brand : 'phuma',
         colour : 'blue',
         size : 3,
         new_price : 520,
         old_price : 700,
         in_stock : 6
      },
      {
         brand : 'vovo',
         colour : 'blue',
         size : 8,
         new_price : 200,
         old_price : 350,
         in_stock : 6
      }
   ];
   var basket = [];
   var globalColour,globalBrand, globalSize, globalIn_stock,total_stock ;

   //Accessors and medofiers

   function storedMap(storedMa){
      if(storedMa){
         stock_map = storedMa;
      }
   }

   function storedBasket(storedBas){
      if(storedBas.length != 0){
         basket = storedBas;
      }
   }

   function getAllShoes(){ return stock_map;}
   function getShoeslength(){ return stock_map.length;}
   function setShoesLength(value){ total_stock = value;}
   function getBasketLength(){ return basket.length;}

                           // Logic funtions
   // Testable functions
   function isLimit(){
      if(total_stock < 50){return true;}
      else{ return false;}
   }

   function stockTotal(theBrand){
      var total = 0 ;
      for(var i = 0 ; i < getShoeslength() ; i++){
         if(stock_map[i].brand === theBrand){
            total = total + stock_map[i].in_stock;
         }
      }
      return total;
   }

   function basketTotal(){
      var total = 0 ;
      var i = 0 ;

      if(basket.length <= 0){
         return total;
      }
      else{
         for(i ; i < basket.length ; i++){
            total = total + basket[i].new_price ;
         }
         return total;
      }
   }

   function searchAllShoeBrand(theBrand){
      var searched = [];
      for(var i = 0 ; i < getShoeslength() ; i++){
         if(stock_map[i].brand === theBrand){
            searched.push(stock_map[i]);
         }
      }
      return searched;
   }

   function searchSpecificBrand(specificBrand, specificColour, specificSize){
      var flag = false;
      for(var i = 0 ; i < getShoeslength() ; i++){
         if(stock_map[i].brand === specificBrand && stock_map[i].colour === specificColour && stock_map[i].size == specificSize){
            flag = true;
            return stock_map[i];
         }
      }
      if(!flag){
         return {};
      }
   }

   function basketOrder(){
      return basket;
   }
   //Cannot be tested because return nothing or not needed for testing
   function takeCare(shoe){
      globalColour = shoe.colour || 'blue';
      globalBrand = shoe.brand || 'amateki';
      globalSize = shoe.size || 6;
      console.log(shoe.in_stock);
      if(shoe.in_stock < 1 || shoe.in_stock === undefined){
         globalIn_stock = 1;
      }
      else{
         globalIn_stock = shoe.in_stock || 1 ;
      }

   }

   function addStock(brandp,colourp,sizep,stockp){
      var found = false;
      storedMap();
      takeCare({
         brand : brandp,
         colour : colourp,
         size : sizep,
         in_stock : stockp
      });
      var tempPush = {
         brand : globalBrand,
         colour : globalColour,
         size : globalSize,
         in_stock : globalIn_stock
      };
      setShoesLength(getShoeslength());
      for(var i = 0; i < total_stock ; i++){
         if(stock_map[i].brand === tempPush.brand && stock_map[i].colour === tempPush.colour && stock_map[i].size == tempPush.size){
            stock_map[i].in_stock += tempPush.in_stock;
            found = true;
         }
      }
      if(!found){
         stock_map.push(tempPush);
         setShoesLength(getShoeslength());
      }
   }

   function order(orderBrand, orderColour, orderSize){
      for(var i = 0 ; i < getShoeslength() ; i++){
         if(stock_map[i].brand === orderBrand && stock_map[i].colour === orderColour && stock_map[i].size === orderSize){
            var tempPush = {
               brand : orderBrand,
               colour : orderColour,
               size : orderSize,
            };
            stock_map[i].in_stock --;
            basket.push(tempPush);
            break;
         }
      }
   }

   function orderCancel(index){
      if(basket[index].brand !== undefined || basket.length != 0){
         addStock(basket[index].brand,basket[index].colour,basket[index].size);
         basket.splice(index,1)
      }
   }

   function clearAll(){
      if(basket.length > 0){
         basket.splice(0, basket.length)
      }
   }

   return{
      inStock : storedMap,
      inStoredBasket : storedBasket,
      addingStock : addStock,
      stockShoes : getAllShoes,
      length : getShoeslength,
      totalStock : stockTotal,
      totalPrice : basketTotal,
      searchAll : searchAllShoeBrand,
      searchShoe : searchSpecificBrand,
      makeOrder : order,
      inBasket : basketOrder,
      cancelOrder : orderCancel,
      cancelAll : clearAll,
      cartItems : getBasketLength
   }

}
var tester = ShoeCatalogue();
