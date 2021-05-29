var shoesize = document.getElementById("shoe_size"); //max 2 numbers
var birthyear = document.getElementById("year"); // must be 4 and not exceeding the current year
var res = "";

function multipleoperations(){ 
    if(!isNaN(shoesize.value) && !isNaN(birthyear.value) && shoesize.value.length == 2 && birthyear.value.length == 4){
        res = (shoesize.value * 2 + 5) * 50 - birthyear.value + 1766;
        alert("The result is: " + res);
    } else{
        alert("Please enter a number. \nShoe size must be 2 numbers. \nBirth year must be 4 numbers.");
    }

 }
