
function promptboxfn(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    if(name != ""){
    alert("Name: " + name + "\nSurname: " + surname + "\nCity: " + city);
    } else{
        alert("At least write your name");
    }
}
