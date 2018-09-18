 var spicyBurger={
        Name:"Chicken Burger",
        Meat:"whale",
        Veggies:"onions",
        Cheese:"american",
        Buns:"wheat",
        Price:7.25,
        Ounces:"8oz"
        
        
      };

     var mildBurger={
        Name:"Beef Burger",
        Meat:"beef",
        Veggies:" tomatoes",
        Cheese:"american",
        Buns:"wheat",
        Price:10,
        Ounces:"8oz" };
             
             function populate(){
                document.getElementById('two').innerHTML=mildBurger.Name+"<br>"+mildBurger.Meat+"<br>"+ mildBurger.Veggies+"<br>"+mildBurger.Cheese+"<br>"+mildBurger.Buns+"<br>"+mildBurger.Ounces+"<br>"+mildBurger.Price;
               
                document.getElementById('one').innerHTML=spicyBurger.Name+"<br>"+spicyBurger.Meat+"<br>"+spicyBurger.Veggies+"<br>"+spicyBurger.Cheese+"<br>"+spicyBurger.Buns+"<br>"+spicyBurger.Price+"<br>"+spicyBurger.Ounces;
             }
      
      var tax = 1.04712;
      
      
           function buyMe(){
  var total=(spicyBurger.Price* tax).toFixed(2);
 document.getElementById('spicyHere').innerHTML="You owe $" +total;
}
     
 function purchase(){
  var total=(mildBurger.Price*1.04712).toFixed(2);
 document.getElementById('mildHere').innerHTML="You owe $" +total;
}
    


