var num1 = document.getElementById("first_number");
var num2 = document.getElementById("second_number");

function remainder(){
    if(!isNaN(num1.value) && !isNaN(num2.value) && num1.value != "" && num2.value != "" ){
        if(num2.value != "0"){
        var division = num1.value / num2.value;
        alert(num1.value % num2.value);
        } else {
            alert("denominator can't be 0");
        }
    }else{
        alert("Both must be numbers");
    }
}