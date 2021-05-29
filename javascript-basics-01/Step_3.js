
function promptbox(){
    var person = prompt("Please enter your name:");
    if(person != ""){
    alert("Hello " + person + "!");   
    } else{
        promptbox();
    }
}

promptbox();
