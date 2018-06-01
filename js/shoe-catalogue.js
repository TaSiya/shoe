function ShoeCatalogue(stored){
                        //Global variables
   var stock_map =[
      {
         brand : 'amateki',
         colour : 'red',
         size : 6,
         in_stock : 10
      }
   ];
   var basket = [];
   var globalColour,globalBrand, globalSize, globalIn_stock,total_stock ;

   //Accessors and medofiers

   function storedMap(stored){
      if(stored){
         stock_map = stored;
      }
   }
   function getAllShoes(){ return stock_map;}
   function getShoeslength(){ return stock_map.length;}
   function setShoesLength(value){ total_stock = value;}

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
      globalIn_stock = shoe.in_stock || 1 ;
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
      else{
         
      }

   }

   return{
      inStock : storedMap,
      addingStock : addStock,
      stockShoes : getAllShoes,
      length : getShoeslength,
      totalStock : stockTotal,
      searchAll : searchAllShoeBrand,
      searchShoe : searchSpecificBrand,
      makeOrder : order,
      inBasket : basketOrder,
      cancelOrder : orderCancel
   }

}
var tester = ShoeCatalogue();
console.log(tester.length());
console.log(tester.stockShoes());
