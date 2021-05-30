var allimages = document.getElementsByClassName("image");

for(var i = 0; i <= allimages.length - 1; i++){
    // console.log(allimages[i]);
    allimages[i].addEventListener('mouseover' , function(){
        // console.log(this.id);
        switch(this.id){ // gets the id of the image that i hover over
            case "image1" :
              this.src = "images/image1_2.jpg";
              break;
            case "image2" :
            this.src = "images/image2_2.jpg";
                break;
            case "image3" :
              this.src = "images/image3_2.jpg";
              break;
            case "image4" :
                this.src = "images/image4_2.jpg";
                break;
            case "image5" :
                this.src = "images/image5_2.jpg";
                break;
        }
    });
}
