// document.write("jgftgjhhff gjyh");

// function clear(){
//     // console.log("TEST sdkjjghds");
//     // document.write("TEST");
//     if (confirm("Are you sure?")) {
//         document.getElementById("name").value = "";
//         document.getElementById("surname").value = "";
//         document.getElementById("city").value = "";   
//     } 
// }


document.querySelector("button").addEventListener('click' , function(){
    if(confirm("Are you sure?")){
     document.querySelector("#name").value = "";
     document.querySelector("#surname").value = "";
     document.querySelector("#city").value = "";
}

});