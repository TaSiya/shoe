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
            var temp = {
               brand : stock_map[i].brand,
               colour : stock_map[i].colour,
               size : stock_map[i].size,
               in_stock : stock_map[i].in_stock
            }
            searched.push(temp);
         }
      }
      return searched;
   }

   function searchSpecificBrand(specificBrand, specificColour, specificSize){
      var flag = false;
      for(var i = 0 ; i < getShoeslength() ; i++){
         if(stock_map[i].brand === specificBrand && stock_map[i].colour === specificColour && stock_map[i].size == specificSize){
            flag = true;
            return {
               brand : stock_map[i].brand,
               colour : stock_map[i].colour,
               size : stock_map[i].size,
               in_stock : stock_map[i].in_stock
            };
         }
      }
      if(!flag){
         return {};
      }
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

   return{
      inStock : storedMap,
      addingStock : addStock,
      stockShoes : getAllShoes,
      length : getShoeslength,
      totalStock : stockTotal,
      searchAll : searchAllShoeBrand,
      searchShoe : searchSpecificBrand
   }

}
var tester = ShoeCatalogue();
console.log(tester.length());
console.log(tester.stockShoes());
