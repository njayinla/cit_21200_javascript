var clicked =false;

document.body.querySelector(".mobileMenu").addEventListener("click", function (){
   clicked =! clicked;

    if(clicked) {
    document.body.querySelector(".menu").style.display="block";
    }else{
    document.body.querySelector(".menu").style.display="none";
    }
})