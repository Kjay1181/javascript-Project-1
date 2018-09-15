var spicyBurger={
        Name:"Good Burger",
        Meat:"beef",
        veggies:"onions",
        cheese:"american",
        buns:"wheat",
        price:"7.25",
        ounces:"8oz"
        
        
      };

     var mildBurger={
        Name:"Good Burger",
        Meat:"beef",
        veggies:" tomatoes",
        cheese:"american",
        buns:"wheat",
        price:"7.25",
        ounces:"8oz" }
             
             
      
           function buyMe(){
  var total=(spicyBurger.price*1.04712).toFixed(2);
 document.getElementById('spicyHere').innerHTML="You owe $" +total;
}
     
 function purchase(){
  var total=(mildBurger.price*1.04712).toFixed(2);
 document.getElementById('mildHere').innerHTML="You owe $" +total;
}
    
