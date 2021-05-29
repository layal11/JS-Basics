// addEventListener("event", call back function)

// var btn = document.getElementById("validate");
// var num1 = document.getElementById("first_number");
// var num2 = document.getElementById("second_number");

// btn.addEventListener("click", function(y){   
//     y.preventDefault();
//     if(!isNaN(num1.value) && !isNaN(num2.value)){
//         alert(num1.value * num2.value);
//     } else{
//         alert("Both must be numbers");
//     }

// });


function multiply(){
    var num1 = document.getElementById("first_number");
    var num2 = document.getElementById("second_number");

    if(!isNaN(num1.value) && !isNaN(num2.value)){
    alert(num1.value * num2.value);
    } else{
        alert("Only numbers are allowed");
    }
}
