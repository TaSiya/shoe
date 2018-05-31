function ShoeCatalogue(stored){
   var stock_map =[
/*      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
      {
         brand : '',
         colour : '',
         size : ,
         in_stock :
      },
*/
   ]
   var total_stock = stock_map.length;
   var basket = [];
   var colour,brand, size, stock;

   function storedMap(){
      if(stored){
         stock_map = stored;
      }
   }

   function getAllShoes(){ return stock_map;}

   function takeCare(shoe){
      colour = shoe.colour || 'blue';
      brand = shoe.brand || 'amateki';
      size = shoe.size || 6;
      stock = shoe.in_stock || 1 ;
   }

   function isLimit(){
      if(total_stock >= 50){return false;}
      else{ return true;}
   }

   function addStock(brandp,colourp,sizep,stockp){
      takeCare({
         brand : brandp,
         colour : colourp,
         size : sizep,
         in_stock : stockp
      });
      storedMap();
      if(isLimit()){
         for(var i = 0 ; i < stock_map.length ; i++){
            console.log('djkfnodanon');
            if(stock_map[i][brand] === undefined && stock_map[i][colour] === undefined && stock_map[i][size] === undefined){
               stock_map[i][brand] = brand;
               stock_map[i][colour] = colour;
               stock_map[i][size] = size;
               stock_map[i][in_stock] = stock;
            }
            else{
               stock_map[i][in_stock] += stock;
            }
         }
      }
   }

   return{
      inStock : storedMap,
      addingStock : addStock,
      stockShoes : getAllShoes
   }

}
