var age = document.getElementById("age");


function AGE(){
    if(!isNaN(age.value)){
        if(age.value < 18){
            alert("you are under 18");
        } else if(age.value > 18){
            alert("you are above 18");
        } else{
            alert("you are 18");
        }
    } else{
        alert ("Enter a number");
    }
}