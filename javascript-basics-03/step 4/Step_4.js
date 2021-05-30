function validation(){
    var pass = document.querySelector("#password").value;
    var confirmpass = document.querySelector("#confirmation").value;
    if(pass !== confirmpass){
        document.querySelector("#password").style.border = "2px solid red";
        document.querySelector("#confirmation").style.border = "2px solid red";
    }else{
        document.querySelector("#password").style.border = "1px solid black";
        document.querySelector("#confirmation").style.border = "1px solid black";
    }

}